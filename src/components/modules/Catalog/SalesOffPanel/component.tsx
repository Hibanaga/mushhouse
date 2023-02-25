import React, { FunctionComponent, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import Product from 'models/Product';

import Headline from 'components/layout/Headline';
import ListElement from 'components/modules/HomeFeaturedProducts/ListElement';

import { listProducts } from '../../../../services/products';

import StyledComponent from './styles';
import { Props } from './types';

const SalesOffPanel: FunctionComponent<Props> = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        try {
            setIsLoading(true);
            const data = await listProducts();
            setSalesOffProducts(data);
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setIsLoading(false);
        }
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
