import React, { FunctionComponent, useEffect, useState } from 'react';

import { PaginationParams } from 'types/options';

import Product from 'models/Product';

import { list } from 'requests/products';

import ListElement from 'components/modules/ListElement';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleList: FunctionComponent<Props> = ({ }) => {
    const [meta, setMeta] = useState<PaginationParams | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        try {
            const { meta, elements } = await list();

            setProducts(elements);
            setMeta(meta);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <StyledComponent className="module-list">
            {products && products?.map((product) => (
                <ListElement
                    key={product.id}
                    product={product}
                />
            ))}
        </StyledComponent>
    );
};

export default ModuleList;
