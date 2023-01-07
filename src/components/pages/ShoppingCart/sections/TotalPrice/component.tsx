import React, { FunctionComponent } from 'react';

import Button from 'components/layout/Button';
import { ButtonSizes } from 'components/layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';

const SectionTotalPrice: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="section-total-price">
            <h2 className="headline">Cart Total</h2>
            <div className="inner inner-sub-total">
                <span className="description">Subtotal</span>
                <span className="value">$454.98</span>
            </div>
            <div className="inner inner-total">
                <span className="description">Total</span>
                <span className="value">$454.98</span>
            </div>

            <Button size={ButtonSizes.Medium}>PROCEED TO CHECKOUT</Button>
        </StyledComponent>
    );
};

export default SectionTotalPrice;
