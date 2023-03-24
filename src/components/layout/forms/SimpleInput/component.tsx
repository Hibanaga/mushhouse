import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import SimpleError from 'components/layout/forms/SimpleError';
import SimpleLabel from 'components/layout/forms/SimpleLabel';

import StyledComponent from './styles';
import { Props } from './types';

const SimpleInput: FunctionComponent<Props> = ({ id, label, placeholder, value, onChange, css, type, name, className, error, disabled, variant, onFocus, onBlur }) => {
    return (
        <StyledComponent className={classNames([
            'layout-forms-simple-input',
            `${variant}-input`,
            className,
        ])}
        >
            {label && (
                <SimpleLabel
                    name="email"
                    label={label}
                />
            )}
            <div className="">
                <input
                    type={type}
                    min="0"
                    name={name}
                    id={id}
                    className={classNames('input',
                        css || '',
                        error ? 'error-input' : '',
                    )}
                    placeholder={placeholder}
                    onChange={onChange ? e => onChange(e) : undefined}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    disabled={disabled}
                />
                {error && <SimpleError error={error} />}
            </div>
        </StyledComponent>
    );
};

export default SimpleInput;
