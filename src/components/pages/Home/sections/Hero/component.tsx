import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { getWords } from 'utils/string';

import Container from 'components/layout/Container';

import StyledComponent from './styles';
import { Props } from './types';


const HomeSectionHero: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="home-section-hero">
            <Image
                fill
                objectFit="cover"
                src="/images/hero.jpg"
                alt="alt image"
                className="bg-image"
            />

            <Container className="layout-layout-container">
                <h1 className="headline">Mikrodozowanie
                  Amanita Muscaria, Amanita Panthetina
                  i inne</h1>
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionHero;
