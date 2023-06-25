import Component from './component';

export enum LabelVariants {
    Checkbox = 'checkbox',
    Select = 'select',
}

export interface Props {
    label: string;
    name?: string;
    variant?: LabelVariants;
}


Component.defaultProps = {
    variant: LabelVariants.Select,
};

export default Component;
