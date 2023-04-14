import React, { FunctionComponent } from 'react';

import Head from 'components/layout/Head';
import Header from 'components/layout/Header';

import SectionCart from './sections/Cart';
import { Props } from './index';
import StyledComponent from './styles';

const PageShoppingCart: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent className="page-shopping-cart">
            <Head title="Shopping cart" />

            <Header />
            <SectionCart />
        </StyledComponent>
    );
};

export default PageShoppingCart;