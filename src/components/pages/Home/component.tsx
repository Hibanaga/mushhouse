import React, { FunctionComponent, useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { useAppContext } from 'context/AppContext';

import { getItem } from 'utils/localStorage';

import ButtonShoppingCart from 'components/layout/ButtonShoppingCart';
import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import HintMarket from 'components/modules/HintMarket';
import ShoppingCartModal from 'components/modules/ShoppingCartModal';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';
import SectionShipping from 'components/pages/Home/sections/Shipping';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ categories }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenMobileDrawer, setIsOpenMobileDrawer] = useState(false);
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

    const handleCloseMobileDrawer = () => setIsOpenMobileDrawer(false);
    const handleOpenMobileDrawer = () => setIsOpenMobileDrawer(true);

    return (
        <StyledComponent className="page-home">

            {isOpenModal && !isOpenMobileDrawer && shoppingCart && (
                <ShoppingCartModal
                    shoppingCart={shoppingCart}
                    onClose={() => setIsOpenModal(false)}
                />
            )}

            {shoppingCart && !isOpenMobileDrawer && shoppingCart.length && !isOpenModal && (
                <ButtonShoppingCart
                    isOpenShoppingCart={isOpenModal}
                    onToggle={() => setIsOpenModal(!isOpenModal)}
                    shoppingCart={shoppingCart}
                />
            )}

            <Header
                isOpenMobileDrawer={isOpenMobileDrawer}
                onOpenDrawer={handleOpenMobileDrawer}
                onCloseDrawer={handleCloseMobileDrawer}
            />
            <Container>
                <HintMarket />
                <SectionHero categories={categories} />
                <SectionDetails categories={categories} />
            </Container>

            <SectionShipping />
            <SectionContact />
        </StyledComponent>
    );
};

export default PageHome;
