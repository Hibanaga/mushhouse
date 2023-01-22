import React, { FunctionComponent } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import CatalogPanel from 'components/pages/Catalog/sections/CatalogPanel';
import SidePanel from 'components/pages/Catalog/sections/SidePanel';
import PageContainer from 'components/wrappers/PageContainer';

import StyledComponent from './styles';
import { Props } from './types';

const BlogItemPage: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-catalog">
            <Header />
            <PageContainer>

            </PageContainer>
            <Footer />
        </StyledComponent>
    );
};

export default BlogItemPage;
