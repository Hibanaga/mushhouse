import { Option } from 'types/options';

export interface Props {
    selectedOption: Option,
    onChangeVariant: (nextValue: Option) => void;
}
