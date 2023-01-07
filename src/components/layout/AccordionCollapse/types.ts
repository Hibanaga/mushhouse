import { Option } from 'types/options';

export enum AccordionSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export enum AccordionStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
}

export interface Props {
    value: Option;
    options: Option[];
    onChange: (nextValue: Option) => void;
    size?: AccordionSizes;
    style?: AccordionStyles;
}
