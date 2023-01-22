import React, { FunctionComponent } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import DetailsPanel from 'components/pages/Blog/sections/DetailsPanel';
import SidePanel from 'components/pages/Blog/sections/SidePanel';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const BlogPage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="blog-page">
            <Header />
            <PageContainer>
                <div className="row-panel">
                    <SidePanel />
                    <DetailsPanel />
                </div>
            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default BlogPage;
