import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutContainer: FunctionComponent<Props> = ({ className, children }) => {
    return (
        <StyledComponent className={classNames(['layout-container', className ?? null])}>
            {children}
        </StyledComponent>
    );
};

export default LayoutContainer;
