import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppContext } from 'context/AppContext';

import { ShoppingCartProps } from 'types/options';

import { getItem, setItem } from 'utils/localStorage';

import LayoutCounter from 'components/layout/Counter';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product }) => {
    const { onRemoveElement } = useAppContext();
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

            <div className="inner-remove">
                <button
                    className="inner-close-button"
                    onClick={() => onRemoveElement && onRemoveElement(product.id)}
                >
                    <Image
                        src="/images/remove-circle-icon.svg"
                        width={32}
                        height={32}
                        quality={100}
                        alt="alt image"
                    />
                </button>
            </div>

        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
