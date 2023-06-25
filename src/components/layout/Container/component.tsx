import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutContainer: FunctionComponent<Props> = ({ className, children }) => {
    return (
        <StyledComponent className={classNames(['layout-container', className ?? null])}>
            {children}
        </StyledComponent>
    );
};

export default LayoutContainer;
