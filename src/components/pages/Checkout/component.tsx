import React, { FunctionComponent } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import OrderDetails from 'components/pages/Checkout/sections/OrderDetails';
import PaymentForm from 'components/pages/Checkout/sections/PaymentForm';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-checkout">
            <Header />
            <PageContainer>
                <h1 className="headline">
                    Billing Details
                    <div className="bottom-underline" />
                </h1>

                <div className="row-checkout">
                    <PaymentForm />
                    <OrderDetails />
                </div>
            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default HomePage;
