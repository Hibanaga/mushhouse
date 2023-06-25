import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutFormSimpleError:FunctionComponent<Props> = ({ customClassName, error }) => {
    return (
        <StyledComponent className={classNames([
            'layout-simple-error',
            customClassName || '',
        ])}
        >
            {error}
        </StyledComponent>
    );
};

export default LayoutFormSimpleError;
