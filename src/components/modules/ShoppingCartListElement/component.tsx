import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';

import { ShoppingCartProps } from 'types/options';

import { getItem, setItem } from 'utils/localStorage';

import LayoutCounter from 'components/layout/Counter';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product }) => {
    const [quantity, setQuantity] = useState(product?.quantity ?? 1);

    useEffect(() => {
        const parseStorageCart = JSON.parse(getItem('shoppingCart') as string);
        const shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id ? { id: element.id, quantity } : element);
        setItem('shoppingCart', JSON.stringify(shoppingCart));
    }, [quantity]);

    return (
        <StyledComponent className="module-shopping-cart-list-element">
            {product.imageUrl && (
                <div className="inner-image">
                    <Image
                        src={product.imageUrl}
                        fill
                        objectFit="cover"
                        alt="alt image"
                    />
                </div>
            )}
            <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
            <div className="inner-counter">
                <LayoutCounter
                    value={quantity}
                    onChange={(value) => setQuantity(value)}
                />
            </div>

        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
