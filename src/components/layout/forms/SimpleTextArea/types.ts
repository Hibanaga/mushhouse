import { ChangeEvent } from 'react';

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
