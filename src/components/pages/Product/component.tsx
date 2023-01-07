import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Product from 'models/Product';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const ProductPage: FunctionComponent<Props> = ({ }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetchShoppingCart();
    }, []);

    const fetchShoppingCart = async () => {
        const response = {
            //TODO: Replace with request after api works
            elements: Array.from({ length: 4 }, (_, index) => (new Product({
                id: index.toString(),
                name: 'Crab Pool Security',
                category: 'fresh-meat',
                price: (index + 1) * 12.33,
                imageUrl: 'https://media.istockphoto.com/id/1148854779/pl/wektor/jab%C5%82ko.jpg?s=612x612&w=is&k=20&c=8ueQOfgiB-o2botZD7pVdqNeKNLuYegKLSmxrqJrTl8=',
            }))),
        };

        setProduct(response.elements.find((product) => product.id === id) || null);
    };

    console.log('product: ', product);

    return (
        <StyledComponent className="page-product">
            <Header />
            <PageContainer>

            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default ProductPage;
