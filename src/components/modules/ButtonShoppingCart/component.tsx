import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Routes from 'types/routes';

import { Props } from './index';
import StyledComponent from './styles';

const ModuleButtonShoppingCart: FunctionComponent<Props> = ({ shoppingCart }) => {
    const router = useRouter();

    return (
        <StyledComponent
            className={classNames(['button-shopping-cart', { active: shoppingCart?.length }])}
            onClick={() => router.push(Routes.ShoopingCart)}
        >
            <Image
                width={56}
                height={56}
                src="/images/shopping-cart.svg"
                alt="alt image"
            />

            <div className="button-elements">
                <span className="content">{shoppingCart?.length}</span>
            </div>
        </StyledComponent>
    );
};

export default ModuleButtonShoppingCart;
