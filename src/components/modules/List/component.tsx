import React, { FunctionComponent, useEffect, useState } from 'react';

import { PaginationParams } from 'types/options';

import Product from 'models/Product';

import { list } from 'requests/products';

import ListElement from 'components/modules/ListElement';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleList: FunctionComponent<Props> = ({ filters }) => {
    const [meta, setMeta] = useState<PaginationParams | null>(null);
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        filters && getProducts(filters);
    }, [JSON.stringify(filters)]);

    async function getProducts(filters: { [key:string]: string }) {
        try {
            const { meta, elements } = await list(filters);

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
