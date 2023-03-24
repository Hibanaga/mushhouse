import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { useAppContext } from 'context/AppContext';

import LayoutCounter from 'components/layout/Counter';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product, onUpdateShoppingCart }) => {
    const { onRemoveElement } = useAppContext();
    const [quantity, setQuantity] = useState(product?.quantity ?? 1);

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
                    onChange={(value) => {
                        setQuantity(value);
                        onUpdateShoppingCart(product, value);
                    }}
                />
            </div>

            <div className="inner-total">
                {product?.price && product?.getFormattedPrice(product?.price * quantity)}
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
