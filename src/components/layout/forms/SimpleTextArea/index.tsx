import Component from './component';
import { TextAreaVariants } from './types';

Component.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    value: '',
    onChange: () => null,
    error: '',
    disabled: false,
    rows: 4,
    variant: TextAreaVariants.Primary,
};

export default Component;
