import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutDrawer: FunctionComponent<Props> = ({ children, className, isOpen }) => {
    return (
        <StyledComponent className={classNames([
            'layout-drawer',
            isOpen ? 'animatedIn' : 'animatedOut',
            className,
        ])}
        >
            {children}
        </StyledComponent>
    );
};

export default LayoutDrawer;
