import React, { FunctionComponent } from 'react';
import { InferGetServerSidePropsType } from 'next';

import Product from 'models/Product';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';

import SectionDetails from './sections/Details';
import SectionHero from './sections/Hero';
import SectionRelated from './sections/Related';
import { getStaticStaticProps } from './index';
import StyledComponent from './styles';


const PageProduct: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ product }) => {
    return (
        <StyledComponent className="page-product">
            <Header />

            <Container>
                <SectionHero product={new Product(product)} />
                <SectionDetails product={new Product(product)} />
                <SectionRelated product={new Product(product)} />
            </Container>
        </StyledComponent>
    );
};

export default PageProduct;
