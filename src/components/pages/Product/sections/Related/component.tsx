import React, { FunctionComponent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import Product from 'models/Product';

import { list } from 'requests/products';

import ListElement from 'components/modules/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionRelated: FunctionComponent<Props> = ({ product }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const [relatedProducts, setRelatedProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        getRelatedProducts();
    }, []);

    const getRelatedProducts = async () => {
        try {
            const { elements } = await list({ page_size: 3 });

            setRelatedProducts(elements.map((element) => new Product(element)));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StyledComponent
            ref={ref}
            className={classNames([
                'product-section-related',
                inView ? 'animate-lazy-load': 'lazy-load',
            ])}
        >
            <h2 className="headline">Podobne produkty</h2>
            <div className="inner">
                {relatedProducts && relatedProducts.map((element) => (
                    <ListElement
                        key={element.id}
                        product={element}
                    />
                ))}
            </div>
        </StyledComponent>
    );
};

export default ProductSectionRelated;
