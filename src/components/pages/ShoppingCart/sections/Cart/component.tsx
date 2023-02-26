import React, { FunctionComponent } from 'react';

import List from 'components/modules/ShoppingCart/List';

import StyledComponent from './styles';
import { Props } from './types';

const ShoppingCartSection: FunctionComponent<Props> = ({ shoppingCart, onRemove }) => {
    return (
        <StyledComponent className="page-shopping-cart-section-cart">
            <List
                shoppingCart={shoppingCart}
                onRemove={onRemove}
            />
        </StyledComponent>
    );
};

export default ShoppingCartSection;
