import React, { FunctionComponent } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutNoResults: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="layout-no-results">
            {children}
        </StyledComponent>
    );
};

export default LayoutNoResults;
