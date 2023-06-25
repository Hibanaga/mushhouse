import Component from './component';
import { InputVariants } from './types';

Component.defaultProps = {
    label: '',
    placeholder: '',
    name: '',
    value: '',
    type: 'text',
    onChange: () => null,
    error: '',
    disabled: false,
    variant: InputVariants.Primary,
};

export default Component;
