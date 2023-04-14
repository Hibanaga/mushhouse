import React, { FunctionComponent, useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { useAppContext } from 'context/AppContext';
import { element } from 'prop-types';

import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

import { getItem } from 'utils/localStorage';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';
import SectionAbout from 'components/pages/Home/sections/About';
import SectionAddress from 'components/pages/Home/sections/Address';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';
import SectionShipping from 'components/pages/Home/sections/Shipping';
import SectionWorth from 'components/pages/Home/sections/Worth';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ meta, products }) => {
    const { shoppingCart, fetchShoppingCart } = useAppContext();

    useEffect(() => {
        const storageCart = getItem('shoppingCart');
        const parsedShoppingCart = storageCart && JSON.parse(storageCart);

        if (!shoppingCart?.length && parsedShoppingCart?.length) {
            getShoppingCart(parsedShoppingCart);
        }
    }, []);

    const getShoppingCart = async (storage: ShoppingCartProps[]) => {
        const arrayIds = storage.map((element)=> element.id);
        if (fetchShoppingCart) {
            await fetchShoppingCart({ products: arrayIds.join(',') });
        }
    };

    return (
        <StyledComponent className="page-home">
            <Head title="Szamanita" />

            <Header />
            <SectionHero />
            <SectionWorth />
            <SectionDetails
                products={products.map((element: any) => new Product(element))}
            />
            <SectionShipping />
            <SectionAbout />
            <SectionContact />
            <SectionAddress />
        </StyledComponent>
    );
};

export default PageHome;
