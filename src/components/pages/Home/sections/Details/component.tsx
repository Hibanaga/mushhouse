import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import List from 'components/modules/List';

import { Props } from './index';
import StyledComponent from './styles';

const HomeSectionDetails: FunctionComponent<Props> = ({ }) => {
    return (
        <StyledComponent
            id="id_products-list"
            className="home-section-details"
        >
            <h3 className="section-headline">Nasze produkty</h3>
            <Container>
                <List />
            </Container>
        </StyledComponent>
    );
};

export default HomeSectionDetails;
