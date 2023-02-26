import React, { FunctionComponent, useEffect, useState } from 'react';

import ShoppingCartProduct from 'models/ShoppingCartProduct';

import { getItem, setItem } from 'utils/localStorage';
import { singleProduct } from 'services/products';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Cart from 'components/pages/ShoppingCart/sections/Cart';
import TotalPrice from 'components/pages/ShoppingCart/sections/TotalPrice';
import PageContainer from 'components/wrappers/PageContainer';

import Discount from './sections/Discount';
import StyledComponent from './styles';
import { Props, ShoppingCart } from './types';

const HomePage: FunctionComponent<Props> = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCartProduct[]>([]);
    const [storageItems, setStorageItems] = useState<ShoppingCart[]>();

    useEffect(() => {
        const shoppingCart = getItem('shoppingCart');
        if (shoppingCart) setStorageItems(JSON.parse(shoppingCart));
    }, []);

    useEffect(() => {
        if (storageItems) fetchShoppingCart(storageItems);
    }, [JSON.stringify(storageItems)]);

    const fetchShoppingCart = async (storage: ShoppingCart[]) => {
        const arrayIds = storage.map(({ id }) => id);
        arrayIds && await Promise.all(arrayIds.map((element) => singleProduct(element))).then((array) => {
            const shoppingCartProduct = array.map((element) => new ShoppingCartProduct({ ...element, quantity: storageItems?.find((item) => element?.id === item.id)?.quantity }));
            setShoppingCart(shoppingCartProduct);
        });
    };
    const handleRemoveItem = (id: string) => {
        const parseStorageCart = JSON.parse(getItem('shoppingCart') as string);
        const shoppingCartList = parseStorageCart.filter((element: ShoppingCart) => element.id !== id);
        setItem('shoppingCart', JSON.stringify(shoppingCartList));
        shoppingCart && setShoppingCart(shoppingCart.filter((element: ShoppingCartProduct) => element.id !== id));
    };


    return (
        <StyledComponent className="page-shopping-cart">
            <Header />
            <PageContainer>
                {storageItems && shoppingCart.length ? (
                    <div className="container-shopping-cart">
                        <Cart
                            shoppingCart={shoppingCart}
                            onRemove={handleRemoveItem}
                        />

                        <div className="row-total">
                            <TotalPrice shoppingCart={shoppingCart} />
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
