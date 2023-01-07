import React, { FunctionComponent } from 'react';

import StyledComponent from './styles';
import { Props } from './types';

const PageContainer: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="wrapper-page-container">
            {children}
        </StyledComponent>
    );
};

export default PageContainer;
