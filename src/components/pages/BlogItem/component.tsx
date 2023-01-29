import React, { FunctionComponent } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import DetailsPanel from 'components/pages/BlogItem/sections/DetailsPanel';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const BlogItemPage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-catalog">
            <Header />
            <PageContainer>
                <DetailsPanel />
            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default BlogItemPage;
