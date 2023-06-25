import Component from './component';
import { ButtonElements, ButtonLayouts, ButtonSizes, ButtonStyles, ButtonTypes, ButtonVariants } from './types';


Component.defaultProps = {
    element: ButtonElements.Button,
    style: ButtonStyles.Primary,
    styles: {},
    variant: ButtonVariants.Primary,
    size: ButtonSizes.Medium,
    layout: ButtonLayouts.Default,
    className: '',
    type: ButtonTypes.Button,
    disabled: false,
    loading: false,
    buttonProps: {},
};

export default Component;
