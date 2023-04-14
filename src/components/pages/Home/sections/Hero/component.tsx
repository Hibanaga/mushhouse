import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Container from 'components/layout/Container';

import { Props } from './index';
import StyledComponent from './styles';


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
