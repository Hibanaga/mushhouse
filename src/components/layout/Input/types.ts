import { ChangeEvent } from 'react';

export enum InputTypes {
    Email = 'email',
    Password = 'password',
    Text = 'text',
}

export enum InputSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export enum InputVariants {
    Primary = 'primary',
    Contained = 'contained',
    Outline = 'outline',
}

export enum InputStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
}

export interface Props {
    placeholder?: string;
    label?: string;
    error?: string;
    value?: string;
    isRequired?: boolean;
    className?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    type?: InputTypes;
    size?: InputSizes;
    style?: InputStyles;
    variant?: InputVariants;
}
