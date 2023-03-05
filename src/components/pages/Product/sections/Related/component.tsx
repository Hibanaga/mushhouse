import React, { FunctionComponent, useEffect, useState } from 'react';

import Product from 'models/Product';

import { list } from 'requests/products';

import ListElement from 'components/modules/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionRelated: FunctionComponent<Props> = ({ product }) => {
    const [relatedProducts, setRelatedProducts] = useState<Product[] | null>(null);
    console.log('product: ', product);

    useEffect(() => {
        getRelatedProducts();
    }, []);

    const getRelatedProducts = async () => {
        try {
            const { elements } = await list({ page_size: 3 });

            setRelatedProducts(elements);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StyledComponent className="product-section-related">
            <h2 className="headline">Похожие продукты</h2>
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
