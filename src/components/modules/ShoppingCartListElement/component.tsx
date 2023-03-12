import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';

import LayoutCounter from 'components/layout/Counter';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product }) => {
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
                        // width={128}
                        // height={128}
                    />
                </div>
            )}
            <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
            <LayoutCounter
                value={quantity}
                onChange={(value) => setQuantity(value)}
            />

        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;
