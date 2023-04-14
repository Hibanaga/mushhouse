import React, { FunctionComponent, useEffect } from 'react';
import { useAppContext } from 'context/AppContext';

import { ShoppingCartProps } from 'types/options';

import { getItem } from 'utils/localStorage';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';

import SectionCart from './sections/Cart';
import SectionContact from './sections/Contact';
import { Props } from './index';
import StyledComponent from './styles';

const PageShoppingCart: FunctionComponent<Props> = ({ }) => {
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
        <StyledComponent className="page-shopping-cart">
            <Head title="Shopping cart" />

            <Header />
            <SectionCart shoppingCart={shoppingCart} />
            <SectionContact />
        </StyledComponent>
    );
};

export default PageShoppingCart;
