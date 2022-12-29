import { ChangeEvent } from 'react';

export interface Props {
    placeholder?: string;
    label?: string;
    error?: string;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
