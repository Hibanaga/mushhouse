import React from 'react';

import Component from './component';

export enum InputVariants {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface Props {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    css?: string;
    name?: string;
    type?: string;
    className?: string;
    error?: string;
    disabled?: boolean;
    variant?: InputVariants;
}


Component.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    value: '',
    type: 'text',
    onChange: () => null,
    error: '',
    disabled: false,
    variant: InputVariants.Primary,
};

export default Component;
