import React, { FunctionComponent, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Option } from 'types/options';

import Product from 'models/Product';

import { chunkArray } from 'utils/array';

import Button from 'components/layout/Button';
import { ButtonStyles } from 'components/layout/Button/types';
import FilterElement from 'components/modules/Catalog/FilterElement';
import ListElement from 'components/modules/HomeFeaturedProducts/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps',
    }, [Autoplay()]);
    const [latestProducts, setLatestProducts] = useState<Product[] | null>(null);

    const departments: Option[] = [
        { label: 'Fresh Meat', value: 'fresh-meat' },
        { label: 'Vegetables', value: 'vegetables' },
        { label: 'Fruit & Nut Gifts', value: 'fruit-and-nut' },
        { label: 'Fresh Berries', value: 'fresh-berries' },
        { label: 'Ocean Foods', value: 'ocean-foods' },
    ];

    const sizes: Option[] = [
        { label: 'Large', value: 'large' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Tiny', value: 'tiny' },
    ];

    useEffect(() => {
        fetchLatestProducts();
    }, []);

    const fetchLatestProducts = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 9 }, (_, index) => (new Product({
                id: index.toString(),
                name: 'Crab Pool Security',
                category: 'fresh-meat',
                price: (index + 1) * 12.33,
                imageUrl: 'https://preview.colorlib.com/theme/ogani/img/product/details/product-details-5.jpg.webp',
                countReviews: 28,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                fullDescriptionDisplay: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                accesibility: true,
                weight: .75,
                images: [
                    'https://st.depositphotos.com/1005063/2840/i/450/depositphotos_28408725-stock-photo-pouring-water-from-bottle-into.jpg',
                    'https://static8.depositphotos.com/1004061/895/i/450/depositphotos_8958160-stock-photo-fresh-water-splash.jpg',
                    'https://static3.depositphotos.com/1000955/132/i/450/depositphotos_1326145-stock-photo-water-surface.jpg',
                    'https://st3.depositphotos.com/13349494/18486/i/450/depositphotos_184863620-stock-photo-full-frame-dark-water-bubbles.jpg',
                    'https://st.depositphotos.com/3280027/4490/i/450/depositphotos_44906995-stock-photo-water-splash-isolated-on-white.jpg',
                    'https://st3.depositphotos.com/13324256/16702/i/450/depositphotos_167029496-stock-photo-water.jpg',
                ],
            }))),
        };

        setLatestProducts(response.elements);
    };
    const array = latestProducts && chunkArray(latestProducts, 3);

    return (
        <StyledComponent className="page-catalog-sections-side-panel">

            <FilterElement
                headline="Department"
                className=" inner-departments"
            >
                <ul className="list-departments">
                    {departments.map(({ label, value }) => (
                        <li
                            key={value}
                            className="list-item"
                        >
                            <span className="label">{label}</span>
                        </li>
                    ))}
                </ul>
            </FilterElement>


            <FilterElement
                headline="Popular Size"
                className="inner-sizes"
            >
                <div className="row-buttons">
                    {sizes.map(({ label, value }) => (
                        <Button
                            key={value}
                            style={ButtonStyles.Secondary}
                            className="button-select-size"
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </FilterElement>


            {array && (
                <FilterElement
                    headline="Latest Products"
                    className="inner-latest"
                >
                    <div
                        className="embla"
                        ref={emblaRef}
                    >
                        <div className="embla-container">
                            {
                                array.map((arrayPerSlide: Product[], idx: number) => (
                                    <div
                                        key={idx}
                                        className="embla-slide"
                                    >
                                        {arrayPerSlide && arrayPerSlide.map((product) => (
                                            <div
                                                key={product.id}
                                                className="inner-slide"
                                            >
                                                <img
                                                    src={product.imageUrl}
                                                    className="image"
                                                    alt="image alt image"
                                                />

                                                <div className="inner">
                                                    <span className="name">{product.name}</span>
                                                    <span className="price">{product.price && formatter.format(product.price)}</span>
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </FilterElement>
            )}
        </StyledComponent>
    );
};

export default HomePage;
