import React, { FunctionComponent } from 'react';

import Headline from 'components/layout/Headline';

import StyledComponent from './styles';
import { Props } from './types';

const FeaturedProductSection: FunctionComponent<Props> = () => {
    return (
        <StyledComponent className="page-home-section-featured-product">
            <Headline headline="Featured Product" />
        </StyledComponent>
    );
};

export default FeaturedProductSection;
