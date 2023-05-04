import React, { FunctionComponent, useEffect, useState } from 'react';

import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

import { getItem, setItem } from 'utils/localStorage';

import Modal from 'components/layout/Modal';
import ModuleMakeOrderForm from 'components/modules/MakeOrderForm';
import ShoppingCartListElement from 'components/modules/ShoppingCartListElement';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartModal: FunctionComponent<Props> = ({ shoppingCart, onClose }) => {
    const formatter = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' });
    const [totalShoppingCart, setTotalShoppingCart] = useState(0);
    const [cart, setCart] = useState<Product[] | null>(null);

    useEffect(() => {
        setCart(shoppingCart);
        const totalPriceShoppingCart = shoppingCart.reduce((prev: number, { price, quantity }: Product) => {
            if (price && quantity) prev += price * quantity;
            return prev;
        }, 0);
        setTotalShoppingCart(totalPriceShoppingCart);
    }, [JSON.stringify(shoppingCart)]);

    const updateCountShoppingList = (product: Product, quantity: number) => {
        const parseStorageCart = JSON.parse(getItem('shoppingCart') as string);
        const shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id ? { ...element, quantity } : element);
        setItem('shoppingCartSzamanita', JSON.stringify(shoppingCart));

        const totalPriceShoppingCart = shoppingCart.reduce((prev: number, { id, quantity }: ShoppingCartProps) => {
            const priceElement = cart?.find((element) => element.id === id)?.price;
            if (priceElement && quantity) prev += priceElement * quantity;
            return prev;
        }, 0);
        setTotalShoppingCart(totalPriceShoppingCart);
    };

    return (
        <StyledComponent className="module-shopping-cart-modal">
            <Modal
                hasCancelButton
                onClose={() => onClose && onClose()}
            >
                <div className="inner-body">
                    <h3 className="subheadline">Ваш заказ:</h3>

                    <div className="inner-shopping-cart">
                        {cart && cart.map((product) => (
                            <ShoppingCartListElement
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    <div className="inner-total-price">
                        <span className="data-name">Сумма:{' '}</span>
                        <span className="data-value">{formatter.format(totalShoppingCart)}</span>
                    </div>

                    <ModuleMakeOrderForm totalPrice={formatter.format(totalShoppingCart)} />
                </div>

            </Modal>
        </StyledComponent>
    );
};

export default ModuleShoppingCartModal;
