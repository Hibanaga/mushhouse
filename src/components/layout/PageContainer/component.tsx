import React, { FunctionComponent } from 'react';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutPageContainer: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="layout-page-container">
            {children}
        </StyledComponent>
    );
};

export default LayoutPageContainer;
