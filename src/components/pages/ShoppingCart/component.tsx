import React, { FunctionComponent } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Cart from 'components/pages/ShoppingCart/sections/Cart';
import TotalPrice from 'components/pages/ShoppingCart/sections/TotalPrice';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-shopping-cart">
            <Header />
            <PageContainer>
                <Cart />

                <div className="row-total">
                    <div className="discount" />
                    <TotalPrice />
                </div>
            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default HomePage;