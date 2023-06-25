import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

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
