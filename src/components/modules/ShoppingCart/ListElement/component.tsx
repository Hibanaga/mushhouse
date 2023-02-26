import React, { FunctionComponent, useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { getItem, setItem } from 'utils/localStorage';
import { getWords } from 'utils/string';

import Counter from 'components/layout/Counter';
import { ShoppingCart } from 'components/pages/ShoppingCart/types';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product, onRemove }) => {
    const [quantity, setQuantity] = useState(product?.quantity ?? 1);
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    const calculatedPrice = product.price && product.price * quantity;

    useEffect(() => {
        const parseStorageCart = JSON.parse(getItem('shoppingCart') as string);
        const shoppingCart = parseStorageCart.map((element: ShoppingCart) => element.id === product.id ? { id: element.id, quantity } : element);
        setItem('shoppingCart', JSON.stringify(shoppingCart));
    }, [quantity]);


    const handleRemoveItem = () => {
        product.id && onRemove(product.id);
    };


    return (
        <StyledComponent className="module-shopping-cart-list-element">
            <div className="inner inner-content">
                <div className="inner-image">
                    <img
                        src={product.imageUrl}
                        alt="alt image product"
                        className="image"
                    />
                </div>
                <span className="name">
                    {product.name && getWords(product.name, 4)}
                </span>
            </div>

            <div className="inner">
                <span className="price price-per-product">
                    {product.price && formatter.format(product.price)}
                </span>
            </div>

            <div className="inner">
                <Counter
                    value={quantity}
                    onChange={(value) => setQuantity(value)}
                />
            </div>

            <div className="inner">
                <span className="price total-price">
                    {calculatedPrice && formatter.format(calculatedPrice)}
                </span>
            </div>

            <div className="inner">
                <MdOutlineCancel
                    className="icon icon-delete"
                    onClick={() => handleRemoveItem()}
                />
            </div>

        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
