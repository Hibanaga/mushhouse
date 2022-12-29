import Component from './component';
import { ButtonSizes, ButtonStyles, ButtonTypes, ButtonVariants } from './types';

Component.defaultProps = {
    type: ButtonTypes.Button,
    variant: ButtonVariants.Primary,
    size: ButtonSizes.Medium,
    style: ButtonStyles.Primary,
};

export default Component;
