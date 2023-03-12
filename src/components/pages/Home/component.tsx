import React, { FunctionComponent } from 'react';
import { InferGetServerSidePropsType } from 'next';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import SectionAddress from 'components/pages/Home/sections/Address';
import SectionContact from 'components/pages/Home/sections/Contact';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';

import { getStaticStaticProps } from './index';
import StyledComponent from './styles';

const PageHome: FunctionComponent<InferGetServerSidePropsType<typeof getStaticStaticProps>> = ({ categories }) => {
    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <SectionHero categories={categories} />
                <SectionDetails />
            </Container>

            <SectionContact />
            <SectionAddress />
        </StyledComponent>
    );
};

export default PageHome;
