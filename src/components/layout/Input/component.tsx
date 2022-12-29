import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import LayoutFormError from 'components/layout/forms/Error';
import LayoutFormLabel from 'components/layout/forms/Label';

import StyledComponent from './styles';
import { Props } from './types';

const LayoutInput: FunctionComponent<Props> = ({ label, error, value, placeholder, onChange, style, size, variant }) => {
    return (
        <StyledComponent className={classNames([
            'layout-input',
            `size-${size}`,
            `style-${style}`,
            `variant-${variant}`,
        ])}
        >
            {label && <LayoutFormLabel label={label} />}
            <div className="wrapper-input">
                <input
                    className="input"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
            {error && <LayoutFormError error={error} />}
        </StyledComponent>
    );
};

export default LayoutInput;
