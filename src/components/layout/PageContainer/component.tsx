import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutPageContainer: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="layout-page-container">
            {children}
        </StyledComponent>
    );
};

export default LayoutPageContainer;
