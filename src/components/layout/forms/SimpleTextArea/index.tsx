import { ChangeEvent } from 'react';

import Component from './component';

export enum TextAreaVariants {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface Props {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    rows?: number;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: () => void;
    css?: string;
    name?: string;
    wrapperCss?: string;
    error?: string;
    disabled?: boolean;
    variant?: TextAreaVariants;
}


Component.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    value: '',
    onChange: () => null,
    error: '',
    disabled: false,
    rows: 4,
    variant: TextAreaVariants.Primary,
};

export default Component;
