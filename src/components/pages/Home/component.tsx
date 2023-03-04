import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';
import SectionDetails from 'components/pages/Home/sections/Details';
import SectionHero from 'components/pages/Home/sections/Hero';

import StyledComponent from './styles';
import { Props } from './types';


const PageHome: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <SectionHero />
                <SectionDetails />
            </Container>
        </StyledComponent>
    );
};

export default PageHome;
