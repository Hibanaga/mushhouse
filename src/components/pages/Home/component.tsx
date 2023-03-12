import React, { FunctionComponent, useEffect } from 'react';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useAppContext } from 'context/AppContext';

import { getItem } from 'utils/localStorage';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import SectionAddress from 'components/pages/Home/sections/Address';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ categories }) => {
    const { shoppingCart, fetchShoppingCart } = useAppContext();

    useEffect(() => {
        getShoppingCart();
    }, []);

    const getShoppingCart = async () => {
        const storageCart = getItem('shoppingCart');

        storageCart && fetchShoppingCart && await fetchShoppingCart({ shoppingIds: JSON.parse(storageCart) });
    };

    console.log('shoppingCart:', shoppingCart);

    return (
        <StyledComponent className="page-home">
            <Header />

            {shoppingCart && shoppingCart.length && (
                <div className="button-shopping-cart">
                    <Image
                        width={56}
                        height={56}
                        src="/images/shopping-cart.svg"
                        alt="alt image"
                    />

                    <div className="button-elements">
                        <span className="content">{shoppingCart.length}</span>
                    </div>
                </div>
            )}

            <Container>
                <SectionHero categories={categories} />
                <SectionDetails />
            </Container>

            <SectionContact />
            <SectionAddress />
        </StyledComponent>
    );
};

export default PageHome;
