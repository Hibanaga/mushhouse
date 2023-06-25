import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

const LayoutBackdrop: FunctionComponent<Props> = ({ isOpen, onDrop }) => {
    return (
        <StyledComponent
            className={classNames(
                'layout-backdrop',
                'filters-mask',
                { visible: isOpen },
            )}
            onClick={onDrop}
        />
    );
};

export default LayoutBackdrop;
