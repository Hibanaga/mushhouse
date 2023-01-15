import { ChangeEvent } from 'react';

export enum CounterSizes {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export interface Props {
    size?: CounterSizes;
    value?: number;
    onChange: (value: number) => void;
}
