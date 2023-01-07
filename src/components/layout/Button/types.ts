import { ReactNode } from 'react';

export enum ButtonTypes {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

export enum ButtonStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
}

export enum ButtonVariants {
    Primary = 'primary',
    Contained = 'contained',
    Outline = 'outline',
}

export enum ButtonSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export interface Props {
    type?: ButtonTypes;
    style?: ButtonStyles;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    isLoading?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}
