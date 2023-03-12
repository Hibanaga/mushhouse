import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutShoppingCartButton: FunctionComponent<Props> = ({ isOpenShoppingCart, shoppingCart, onToggle }) => {
    return (
        <StyledComponent
            className={classNames(['button-shopping-cart', { active: isOpenShoppingCart }])}
            onClick={() => onToggle && onToggle()}
        >
            <Image
                width={56}
                height={56}
                src="/images/shopping-cart.svg"
                alt="alt image"
            />

            <div className="button-elements">
                <span className="content">{shoppingCart.length}</span>
            </div>
        </StyledComponent>
    );
};

export default LayoutShoppingCartButton;
