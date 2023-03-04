import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleListElement: FunctionComponent<Props> = ({ product }) => {
    console.log('product: ', product);

    return (
        <StyledComponent className="module-list-element">
            {product.imageUrl && (
                <div className="inner-image">
                    <Image
                        src={product.imageUrl}
                        alt="alt image product"
                        layout="fill"
                    />
                </div>
            )}

            <div className="inner-content">
                <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
                <span className="data-category">{product?.category ?? ''}</span>
                <span className="data-price">{product?.price ?? ''}</span>
            </div>
        </StyledComponent>
    );
};

export default ModuleListElement;
