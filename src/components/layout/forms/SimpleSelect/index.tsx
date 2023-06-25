import { MultiValue, SingleValue } from 'react-select';

import { Option } from 'types/options';

import Component from './component';

export interface Props {
    error?: string;
    multiline?: boolean;
    hasClearButton?: boolean;
    options: Option<string>[];
    className?: string;
    classNamePrefix?: string;
    placeholder?: string;
    onChange?: (newValue: SingleValue<Option<string>> | MultiValue<Option<string>> ) => void;
}


Component.defaultProps = {
    multiline: false,
    hasClearButton: false,
    placeholder: '',
    classNamePrefix: 'multi-select-category',
};

export default Component;
