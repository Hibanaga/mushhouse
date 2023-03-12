import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Button from 'components/layout/Button';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    return (
        <StyledComponent className="product-section-hero">
            <div className="column-images">
                {product?.imageUrl && (
                    <Image
                        src={product.imageUrl}
                        alt="alt image product"
                        width={432}
                        height={432}
                        className="image"
                        quality={100}
                    />
                )}
            </div>

            <div className="column-details">
                <h3 className="data-headline">{product?.fullDisplayName}</h3>
                <span className="data-price">{product?.priceDisplay}</span>

                <Button className="button-add-to-cart">
                    Купить
                </Button>

                <span className="data-description">
                    {product?.description}
                </span>
            </div>
        </StyledComponent>
    );
};

export default ProductSectionHero;
