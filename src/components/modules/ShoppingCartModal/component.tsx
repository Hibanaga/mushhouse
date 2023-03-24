import React, { FunctionComponent, useEffect, useState } from 'react';

import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

import { getItem, setItem } from 'utils/localStorage';

import SimpleInput from 'components/layout/forms/SimpleInput';
import Modal from 'components/layout/Modal';

import Button from '../../layout/Button';
import { ButtonTypes } from '../../layout/Button/types';
import ShoppingCartListElement from '../ShoppingCartListElement';

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
        setItem('shoppingCart', JSON.stringify(shoppingCart));

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
                                onUpdateShoppingCart={(product: Product, quantity: number) => updateCountShoppingList(product, quantity)}
                            />
                        ))}
                    </div>

                    <div className="inner-total-price">
                        <span className="data-name">Сумма:{' '}</span>
                        <span className="data-value">{formatter.format(totalShoppingCart)}</span>
                    </div>


                    <form className="form">
                        <div className="inner-fullname">
                            <SimpleInput
                                name="firstName"
                                className="input-first-name"
                                placeholder="Имя"
                                onChange={() => console.log('aaa')}
                            />
                            <SimpleInput
                                name="lastName"
                                placeholder="Фамилия"
                                className="input-last-name"
                                onChange={() => console.log('aaa')}
                            />
                        </div>
                        <SimpleInput
                            name="phone"
                            className="input-phone"
                            label="Адресс"
                            placeholder="107031, г. Москва, ул. Большая Лубянка, 2, кв. 1"
                            onChange={() => console.log('aaa')}
                        />

                        <SimpleInput
                            name="promocode"
                            className="input-promocode"
                            label="Промокод"
                            onChange={() => console.log('aaa')}
                        />

                        <div className="inner-totalsum">
                            <div className="inner-total-form">
                                <span className="data-name">Сумма:{' '}</span>
                                <span className="data-value">{formatter.format(totalShoppingCart)}</span>
                            </div>

                            <div className="inner-total-form">
                                <span className="data-name">Итоговая сумма:{' '}</span>
                                <span className="data-value">{formatter.format(totalShoppingCart)}</span>
                            </div>
                        </div>


                        <Button
                            type={ButtonTypes.Submit}
                            className="button-submit-form"
                        >
                            Я оплатил
                        </Button>
                    </form>
                </div>
            </Modal>
        </StyledComponent>
    );
};

export default ModuleShoppingCartModal;
