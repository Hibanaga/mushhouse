import React, { FunctionComponent } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleShoppingCartListElement: FunctionComponent<Props> = ({ product }) => {
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    const calculatedPrice = product.price && product.price * 2;

    return (
        <StyledComponent className="module-shopping-cart-list-element">
            <div className="inner inner-content">
                <div className="inner-image">
                    <img
                        src={product.imageUrl}
                        alt="alt image product"
                        className="image"
                    />
                </div>
                <span className="name">
                    {product.name}
                </span>
            </div>

            <div className="inner">
                <span className="price price-per-product">
                    {product.price && formatter.format(product.price)}
                </span>
            </div>

            <div className="inner">
                {/*quatity*/}
                1
            </div>

            <div className="inner">
                <span className="price total-price">
                    {calculatedPrice && formatter.format(calculatedPrice)}
                </span>
            </div>

            <div className="inner">
                <MdOutlineCancel className="icon" />
            </div>

        </StyledComponent>
    );
};

export default ModuleShoppingCartListElement;