import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'routes/routes';

import Button from 'components/layout/Button';
import { ButtonSizes } from 'components/layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';

const SectionTotalPrice: FunctionComponent<Props> = ({ shoppingCart }) => {
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    const totalPrice = shoppingCart.reduce((prev, { price }) => price ? prev += price : prev, 0);

    return (
        <StyledComponent className="section-total-price">
            <h2 className="headline">Cart Total</h2>
            <div className="inner inner-sub-total">
                <span className="description">Subtotal</span>
                <span className="value">{formatter.format(totalPrice)}</span>
            </div>
            <div className="inner inner-total">
                <span className="description">Total</span>
                <span className="value">{formatter.format(totalPrice)}</span>
            </div>

            <Button
                size={ButtonSizes.Medium}
                className="button-proceed"
                onClick={() => navigate(routes.PaymentCheckout)}
            >
                PROCEED TO CHECKOUT
            </Button>
        </StyledComponent>
    );
};

export default SectionTotalPrice;
