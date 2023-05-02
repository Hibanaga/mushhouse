import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { useAppContext } from 'context/AppContext';

import LayoutCounter from 'components/layout/Counter';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ delivery, product }) => {
    const { onAddElement, onRemoveElement } = useAppContext();
    const [quantity, setQuantity] = useState(product?.quantity ?? 1);

    return (
        <StyledComponent className="module-shopping-cart-list-element">
            <div className="inner-main">
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

                <div className="inner-content">
                    <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
                    <span className="data-description">{product?.description}</span>
                    <span className="data-category">{product?.category}</span>
                </div>
            </div>
            <div className="inner-counter">
                <LayoutCounter
                    value={quantity}
                    onChange={(value) => {
                        if (value > 0) {
                            setQuantity(value);
                            onAddElement && onAddElement(product, value);
                        } else {
                            onRemoveElement && onRemoveElement(product);
                        }
                    }}
                />
            </div>

            <div className="inner-total">
                {product?.price && product?.priceDisplay}
            </div>
        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
