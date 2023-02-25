import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Product from 'models/Product';

import { singleProduct } from 'services/products';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import DetailsPanel from 'components/pages/Product/sections/DetailsPanel';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const ProductPage: FunctionComponent<Props> = ({}) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        id && fetchShoppingCart(id);
    }, [JSON.stringify(id)]);

    const fetchShoppingCart = async (id: string) => {
        try {
            setIsLoading(true);
            const element = await singleProduct(id);
            console.log('element: ', element);

            setProduct(element);
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <StyledComponent className="page-product">
            <Header />
            <PageContainer>
                {isLoading && (<span>loading</span>)}
                {!isLoading && product && <DetailsPanel product={product} />}
            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default ProductPage;
