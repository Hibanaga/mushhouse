import React, { FunctionComponent, useState } from 'react';

import Button from 'components/layout/Button';

import StyledComponent from './styles';
import { Props } from './types';

const OrderDetails: FunctionComponent<Props> = () => {
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });


    return (
        <StyledComponent className="page-checkout-section-order-details">
            <h1 className="headline-order">
                Your Order
                <div className="bottom-underline" />
            </h1>

            <div className="inner-products">
                <div className="inner-th">
                    <span className="th">Products</span>
                    <span className="th">Total</span>
                </div>

                <div className="row-products">
                    <div className="inner-product">
                        <span className="option-label">Vegetable’s Package</span>
                        <span className="option-value">{formatter.format(subTotalPrice)}</span>
                    </div>
                </div>
            </div>

            <div className="inner-price inner-price-subtotal">
                <span className="th">
                    Subtotal
                </span>

                <span className="price">
                    {formatter.format(subTotalPrice)}
                </span>
            </div>

            <div className="inner-price inner-price-total">
                <span className="th">
                    Total
                </span>

                <span className="price">
                    {formatter.format(totalPrice)}
                </span>
            </div>

            <div className="inner-action">
                <Button>
                    PLACE ORDER
                </Button>
            </div>
        </StyledComponent>
    );
};

export default OrderDetails;
