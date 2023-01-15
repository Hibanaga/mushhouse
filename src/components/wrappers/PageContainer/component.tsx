import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const PageContainer: FunctionComponent<Props> = ({ children, className }) => {
    return (
        <StyledComponent className={classNames(['wrapper-page-container', className])}>
            {children}
        </StyledComponent>
    );
};

export default PageContainer;
