import React, { FunctionComponent, useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { useAppContext } from 'context/AppContext';

import { getItem } from 'utils/localStorage';

import ButtonShoppingCart from 'components/layout/ButtonShoppingCart';
import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import ShoppingCartModal from 'components/modules/ShoppingCartModal';
import SectionAddress from 'components/pages/Home/sections/Address';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ categories }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { shoppingCart, fetchShoppingCart } = useAppContext();

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

        storageCart && fetchShoppingCart && await fetchShoppingCart({ shoppingIds: JSON.parse(storageCart) });
    };

    return (
        <StyledComponent className="page-home">

            {isOpenModal && shoppingCart && (
                <ShoppingCartModal
                    shoppingCart={shoppingCart}
                    onClose={() => setIsOpenModal(false)}
                />
            )}

            {shoppingCart && shoppingCart.length && (
                <ButtonShoppingCart
                    isOpenShoppingCart={isOpenModal}
                    onToggle={() => setIsOpenModal(!isOpenModal)}
                    shoppingCart={shoppingCart}
                />
            )}

            <Header />
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
