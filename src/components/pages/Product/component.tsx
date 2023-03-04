import React, { FunctionComponent } from 'react';

import Container from 'components/layout/Container';
import Header from 'components/layout/Header';

import StyledComponent from './styles';
import { Props } from './types';


const PageProduct: FunctionComponent<Props> = ({  }) => {
    return (
        <StyledComponent className="page-product">
            <Header />

            <Container>

            </Container>
        </StyledComponent>
    );
};

export default PageProduct;
