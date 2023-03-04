import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Button from '../../layout/Button';
import { ButtonVariants } from '../../layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';


const ModuleListElement: FunctionComponent<Props> = ({ product }) => {
    console.log('product: ', product);
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

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

            <div className="inner-main">
                <div className="inner-content">
                    <h3 className="data-name">{product?.fullDisplayName ?? product?.name}</h3>
                    <div>
                        <span className="data-category">{product?.category ?? ''}</span>
                        <span className="data-price">{product?.price && formatter.format(product?.price)}</span>
                    </div>

                </div>

                <div className="inner-action">
                    <Button className="button-add-cart">
                        В корзину
                    </Button>
                    <Button
                        className="button-details"
                        variant={ButtonVariants.Outline}
                    >
                        Подробнее
                    </Button>
                </div>
            </div>
        </StyledComponent>
    );
};

export default ModuleListElement;
