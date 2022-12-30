import Component from './component';
import { InputSizes, InputStyles, InputTypes, InputVariants } from './types';

Component.defaultProps = {
    type: InputTypes.Text,
    style: InputStyles.Primary,
    size: InputSizes.Medium,
    variant: InputVariants.Contained,
};

export default Component;
