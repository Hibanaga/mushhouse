import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';

import SectionHero from './sections/Hero';
import StyledComponent from './styles';
import { Props } from './types';


const PageHome: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="page-home">
            <Header />

            <Container>
                <SectionHero />
            </Container>
        </StyledComponent>
    );
};

export default PageHome;
