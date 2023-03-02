import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const NoResult:FunctionComponent<Props> = ({ message }) => {
    return (
        <StyledComponent className="layout-no-result">
            <h2 className="headline">{message ?? 'Oops. We couldn’t find any results.'}</h2>
        </StyledComponent>
    );
};

export default NoResult;
