import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import classNames from 'classnames';

import Button from 'components/layout/Button';

import StyledComponent from './styles';
import { Props } from './types';

const ProductSectionHero: FunctionComponent<Props> = ({ product }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <StyledComponent
            ref={ref}
            className={classNames([
                'product-section-hero',
                inView ? 'animate-lazy-load': 'lazy-load',
            ])}
        >
            <div className="column-images">
                {product?.imageUrl && (
                    <div className="inner-image">
                        <Image
                            fill
                            priority
                            objectFit="cover"
                            src={product.imageUrl}
                            alt="alt image product"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUrAgAADQAeGhY3CwAAAABJRU5ErkJggg=="
                            placeholder="blur"
                        />
                    </div>
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
