import React, { FunctionComponent } from 'react';

import List from 'components/modules/ShoppingCart/List';

import StyledComponent from './styles';
import { Props } from './types';

const ShoppingCartSection: FunctionComponent<Props> = ({ products }) => {
    return (
        <StyledComponent className="page-shopping-cart-section-cart">
            <List products={products} />
        </StyledComponent>
    );
};

export default ShoppingCartSection;
