import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import StyledComponent from './styles';
import { Props } from './types';

const SimpleLabel:FunctionComponent<Props> = ({ variant, name, label }) => {
    return (
        <StyledComponent className={classNames([
            'layout-simple-label',
            variant && `${variant}-label-style`,
        ])}
        >
            <label
                htmlFor={name}
                className="label"
            >
                {label}
            </label>
        </StyledComponent>
    );
};

export default SimpleLabel;
