import React, { ChangeEvent, FunctionComponent } from 'react';
import classNames from 'classnames';

import SimpleError from 'components/layout/forms/SimpleError';
import SimpleLabel from 'components/layout/forms/SimpleLabel';

import StyledComponent from './styles';
import { Props } from './types';

const SimpleTextArea: FunctionComponent<Props> = ({ id, label, placeholder, value, onChange, css, name, wrapperCss, error, disabled, variant, onFocus, rows }) => {
    return (
        <StyledComponent className={classNames([
            'layout-forms-text-area-input',
            `${variant}-textarea`,
            wrapperCss,
        ])}
        >
            {label && (
                <SimpleLabel
                    name="email"
                    label={label}
                />
            )}
            <div className="">
                <textarea
                    name={name}
                    id={id}
                    className={classNames('textarea',
                        css || '',
                        error ? 'error-textarea' : '',
                    )}
                    rows={rows}
                    placeholder={placeholder}
                    onChange={onChange ? (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e) : undefined}
                    onFocus={onFocus}
                    value={value}
                    disabled={disabled}
                />
                {error && <SimpleError error={error} />}
            </div>
        </StyledComponent>
    );
};

export default SimpleTextArea;
