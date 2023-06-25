import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutNoResults: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="layout-no-results">
            {children}
        </StyledComponent>
    );
};

export default LayoutNoResults;
