import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const Headline: FunctionComponent<Props> = ({ headline }) => {
    return (
        <StyledComponent className="layout-headline">
            <h1 className="headline">
                {headline}
                <div className="headline-underline" />
            </h1>
        </StyledComponent>
    );
};

export default Headline;
