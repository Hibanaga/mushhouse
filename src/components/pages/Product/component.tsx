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
            <Head
                title={product.name || 'Szamanita product'}
                description={ product?.description?.description_short || 'Shamanita product description'}
            >
                <meta
                    name="description"
                    content="Produkty na podstawie muchomora czerwonego. Maści, kapsułki, kapelusze, proszek, Zbieramy i suszymy od 2012 roku. Dostawa w całej Polsce oraz innych krajach EU. Kupić w Polsce. Dostawa na terenie całego kraju."
                />
                <meta
                    property="og:description"
                    content="Produkty na podstawie muchomora czerwonego. Maści, kapsułki, kapelusze, proszek, Zbieramy i suszymy od 2012 roku. Dostawa w całej Polsce oraz innych krajach EU. Kupić w Polsce. Dostawa na terenie całego kraju."
                />
            </Head>
            <Header />

            <ButtonShoppingCart
                shoppingCart={shoppingCart}
            />

            <Container>
                <SectionHero product={new Product(product)} />
                <SectionDetails product={new Product(product)} />
                <SectionRelated product={new Product(product)} />
            </Container>

            <HomeSectionAddress />
        </StyledComponent>
    );
};

export default PageProduct;
