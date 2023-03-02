import React, { FunctionComponent, useEffect } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Blog from 'components/pages/Home/sections/Blog';
import FeaturedProductSection from 'components/pages/Home/sections/FeaturedProduct';
import HeroSection from 'components/pages/Home/sections/Hero';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const HomePage: FunctionComponent<Props> = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <StyledComponent className="page-home">
            <Header />
            <PageContainer>
                <HeroSection />
                <FeaturedProductSection />
                <Blog />
            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default HomePage;
