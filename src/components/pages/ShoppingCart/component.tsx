import React, { FunctionComponent, useEffect, useState } from 'react';

import Product from 'models/Product';
import ShoppingCartProduct from 'models/ShoppingCartProduct';

import { getItem } from 'utils/localStorage';
import { singleProduct } from 'services/products';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Cart from 'components/pages/ShoppingCart/sections/Cart';
import TotalPrice from 'components/pages/ShoppingCart/sections/TotalPrice';
import PageContainer from 'components/wrappers/PageContainer';

import Discount from './sections/Discount';
import StyledComponent from './styles';
import { Props, ShoppingCartProducts } from './types';

const HomePage: FunctionComponent<Props> = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCartProduct[] | null>(null);
    const [storageItems, setStorageItems] = useState<ShoppingCartProducts[]>();

    useEffect(() => {
        const shoppingCart = getItem('shoppingCart');
        if (shoppingCart) setStorageItems(JSON.parse(shoppingCart));
    }, []);

    useEffect(() => {
        if (storageItems) fetchShoppingCart(storageItems);
    }, [JSON.stringify(storageItems)]);

    const fetchShoppingCart = async (storage: ShoppingCartProducts[]) => {
        const arrayIds = storage.map(({ id }) => id);
        arrayIds && await Promise.all(arrayIds.map((element) => singleProduct(element))).then((array) => {
            const shoppingCartProduct = array.map((element) => new ShoppingCartProduct({ ...element, quantity: storageItems?.find((item) => element?.id === item.id)?.quantity }));
            setShoppingCart(shoppingCartProduct);
        });
    };


    console.log('shoppingCart: ', shoppingCart);


    return (
        <StyledComponent className="page-shopping-cart">
            <Header />
            <PageContainer>
                {storageItems && shoppingCart ? (
                    <div className="container-shopping-cart">
                        <Cart products={shoppingCart} />

                        <div className="row-total">
                            <TotalPrice />
                            <Discount />
                        </div>
                    </div>
                ) : (
                    <div className="container-empty-cart">

                    </div>
                )}

            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default HomePage;
