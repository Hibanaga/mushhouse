import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Props } from './index';
import StyledComponent from './styles';

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
