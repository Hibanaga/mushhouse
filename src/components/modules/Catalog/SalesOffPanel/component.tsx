import React, { FunctionComponent, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import Product from 'models/Product';

import Headline from 'components/layout/Headline';
import ListElement from 'components/modules/HomeFeaturedProducts/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const SalesOffPanel: FunctionComponent<Props> = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps',
    }, [Autoplay()]);
    const [salesOffProducts, setSalesOffProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        fetchSalesOff();
    }, []);

    const fetchSalesOff = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 6 }, (_, index) => (new Product({
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

        setSalesOffProducts(response.elements);
    };


    return (
        <StyledComponent className="pages-catalog-section-sales-off-panel">
            <Headline
                headline="Sale Off"
                className="headline-sales-off"
            />

            {salesOffProducts && (
                <div
                    className="embla"
                    ref={emblaRef}
                >
                    <div className="embla-container">
                        {
                            salesOffProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="embla-slide"
                                >
                                    <ListElement
                                        product={product}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </StyledComponent>
    );
};

export default SalesOffPanel;
