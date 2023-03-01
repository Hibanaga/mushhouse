import React, { FunctionComponent, useEffect, useState } from 'react';

import Product from 'models/Product';

import { listProducts } from 'services/products';

import Pagination from 'components/layout/Pagination';
import ListElement from 'components/modules/HomeFeaturedProducts/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const ProductsPanel: FunctionComponent<Props> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const { meta, elements } = await listProducts();
            setProducts(elements);
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <StyledComponent className="module-catalog-products-panel">
            <div className="container-products">

                <div className="inner-filters">
                    <div className="inner-sort-by">

                    </div>

                    <div className="inner-products">

                    </div>

                    <div className="catalog-view">

                    </div>
                </div>

                <div className="row-elements">
                    {products && products.map((product) => (
                        <ListElement
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                <Pagination
                    page={1}
                    perPage={12}
                    itemsTotalLength={24}
                    onPageChange={() => console.log('aaaa')}
                    className="pagination-custom"
                />
            </div>
        </StyledComponent>
    );
};

export default ProductsPanel;
