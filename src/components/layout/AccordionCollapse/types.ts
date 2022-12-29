import { Option } from 'types/options';

export interface Props {
    value: Option;
    options: Option[];
    onChange: (nextValue: Option) => void;
}
