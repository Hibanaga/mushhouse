import React, { FunctionComponent } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-shopping-cart">
            <Header />
            <PageContainer>

            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default HomePage;
