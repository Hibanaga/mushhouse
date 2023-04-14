import React, { FunctionComponent, useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { useAppContext } from 'context/AppContext';

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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { shoppingCart, fetchShoppingCart } = useAppContext();

    console.log('products: ', products);

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'initial';
        }
    }, [isOpenModal]);

    useEffect(() => {
        getShoppingCart();
    }, []);

    const getShoppingCart = async () => {
        const storageCart = getItem('shoppingCart');
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
