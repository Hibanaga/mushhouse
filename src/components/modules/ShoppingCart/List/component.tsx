import React, { FunctionComponent } from 'react';

import ListElement from 'components/modules/ShoppingCart/ListElement';

import StyledComponent from './styles';
import { Props } from './types';

const ModuleShoppingCartList: FunctionComponent<Props> = ({ shoppingCart, onRemove }) => {
    return (
        <StyledComponent className="module-shopping-cart-list">
            <div className="inner-table-header">
                <span className="th">Products</span>
                <span className="th">Price</span>
                <span className="th">Quantity</span>
                <span className="th">Total</span>
            </div>

            <div className="inner-list">
                {shoppingCart && shoppingCart.map((product) => (
                    <ListElement
                        key={product.id}
                        product={product}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </StyledComponent>
    );
};

export default ModuleShoppingCartList;
