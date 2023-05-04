import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppContext';

import Routes from 'types/routes';

import LayoutCounter from 'components/layout/Counter';
import LightBox from 'components/layout/LightBox';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product }) => {
    const router = useRouter();
    const { onAddElement, onRemoveElement } = useAppContext();
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [quantity, setQuantity] = useState(product?.quantity ?? 1);

    return (
        <StyledComponent className="module-shopping-cart-list-element">
            {isOpenLightBox && product?.imageUrl && (
                <LightBox
                    imageSrc={product?.imageUrl }
                    onClose={() => setIsOpenLightBox(false)}
                />
            )}

            <div className="inner-main">
                {product.imageUrl && (
                    <div
                        className="inner-image"
                        onClick={() => setIsOpenLightBox(true)}
                    >
                        <Image
                            src={product.imageUrl}
                            fill
                            objectFit="cover"
                            alt="alt image"
                        />
                    </div>
                )}

                <div className="inner-content">
                    <h3
                        className="data-name"
                        onClick={() => router.push({
                            pathname: Routes.Product,
                            query: { id: product.id },
                        })}
                    >{product?.fullDisplayName ?? product?.name}</h3>
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
                {product?.price ? `${(product?.price * quantity).toFixed(2)} PLN` : '0.00 PLN'}
            </div>
        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
