import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';

const ShoppingCartSectionCart: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="shopping-cart-section-cart">
            <h2 className="section-headline">Adres dostawy</h2>

        </StyledComponent>
    );
};

export default ShoppingCartSectionCart;
