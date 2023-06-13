import React, { FunctionComponent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from 'context/AppContext';

import { ShoppingCartProps } from 'types/options';

import Delivery from 'models/Delivery';

import { getItem } from 'utils/localStorage';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';
import Toast from 'components/layout/Toast';
import { ToastVariants } from 'components/layout/Toast/types';
import HomeSectionAddress from 'components/pages/Home/sections/Address';

import SectionCart from './sections/Cart';
import SectionContact from './sections/Contact';
import { Props } from './index';
import StyledComponent from './styles';

const PageShoppingCart: FunctionComponent<Props> = ({ delivery }) => {
    const { shoppingCart, fetchShoppingCart } = useAppContext();

    useEffect(() => {
        const storageCart = getItem('shoppingCartSzamanita');
        const parsedShoppingCart = storageCart && JSON.parse(storageCart);

        if (!shoppingCart?.length && parsedShoppingCart?.length) {
            getShoppingCart(parsedShoppingCart);
        }
    }, []);

    const getShoppingCart = async (storage: ShoppingCartProps[]) => {
        const arrayIds = storage.map((element)=> element.id);

        try {
            if (fetchShoppingCart) {
                await fetchShoppingCart({ products: arrayIds.join(',') });
            }
        } catch (e) {
            toast(
                <Toast
                    variant={ToastVariants.Error}
                    message={'Server error! Try again'}
                />,
            );
        }
    };


    return (
        <StyledComponent className="page-shopping-cart">
            <Head
                title="Shopping cart"
                name="Mikrodawkowanie Amanita Muscaria"
                description="Produkty na podstawie muchomora czerwonego. Maści, kapsułki, kapelusze, proszek, Zbieramy i suszymy od 2012 roku. Dostawa w całej Polsce oraz innych krajach EU."
            />

            <Header />
            <SectionCart
                delivery={delivery?.map((element) => new Delivery(element))}
                shoppingCart={shoppingCart}
            />
            <SectionContact
                delivery={delivery?.map((element) => new Delivery(element))}
            />

            <HomeSectionAddress />
        </StyledComponent>
    );
};

export default PageShoppingCart;
