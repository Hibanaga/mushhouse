import React, { FunctionComponent } from 'react';

import Header from 'components/layout/Header';
import HeroSection from 'components/pages/Home/sections/Hero';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-home">
            <Header />
            <PageContainer>
                <HeroSection />
            </PageContainer>
        </StyledComponent>
    );
};

export default HomePage;
