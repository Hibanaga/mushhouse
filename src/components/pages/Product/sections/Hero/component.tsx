import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    console.log('product: ', product);

    return (
        <StyledComponent className="product-section-hero">
            <div className="column-images">
                {product.imageUrl && (
                    <Image
                        src={product.imageUrl}
                        alt="alt image product"
                        width={18}
                        height={18}
                    />
                )}
            </div>
        </StyledComponent>
    );
};

export default ProductSectionHero;
