import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

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
