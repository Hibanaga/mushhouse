import React, { FunctionComponent, useEffect } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { useAppContext } from 'context/AppContext';

import Product from 'models/Product';

import Container from 'components/layout/Container';
import Head from 'components/layout/Head';
import Header from 'components/layout/Header';
import ButtonShoppingCart from 'components/modules/ButtonShoppingCart';
import HomeSectionAddress from 'components/pages/Home/sections/Address';

import SectionDetails from './sections/Details';
import SectionHero from './sections/Hero';
import SectionRelated from './sections/Related';
import { getStaticStaticProps } from './index';
import StyledComponent from './styles';


const PageProduct: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ product }) => {
    const { shoppingCart, fetchShoppingCart } = useAppContext();

    useEffect(() => {
        fetchShoppingCart && fetchShoppingCart();
    }, []);

    return (
        <StyledComponent className="page-product">
            <Head title={product.name || 'Szamanita product'} />
            <Header />

            <ButtonShoppingCart
                shoppingCart={shoppingCart}
            />

            <Container>
                <SectionHero product={new Product(product)} />
                {/*<SectionDetails product={new Product(product)} />*/}
                <SectionRelated product={new Product(product)} />
            </Container>

            <HomeSectionAddress />
        </StyledComponent>
    );
};

export default PageProduct;
