import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';

import StyledComponent from './styles';
import { Props } from './types';


const HomeSectionAddress: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent
            id="id_shipping"
            className="home-section-address"
        >
            <Container className="layout-layout-container">
                <span className="data-content data-email">www.szamanita-pantherina.pl </span>
                <span className="data-content data-policy">All rights reserved</span>
                <span className="data-content data-policy">{new Date().getFullYear()}</span>
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionAddress;
