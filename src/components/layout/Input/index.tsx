import Component from './component';
import { InputSizes, InputStyles, InputVariants } from './types';

Component.defaultProps = {
    style: InputStyles.Primary,
    size: InputSizes.Medium,
    variant: InputVariants.Contained,
};

export default Component;
