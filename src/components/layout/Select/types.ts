import { Option } from 'types/options';


export enum SelectSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export interface Props {
    value: Option;
    options: Option[];
    onChange: (nextValue: Option) => void;
    size?: SelectSizes;
}
