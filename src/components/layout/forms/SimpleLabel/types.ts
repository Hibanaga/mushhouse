export enum LabelVariants {
    Checkbox = 'checkbox',
    Select = 'select',
}


export interface Props {
    label: string;
    name?: string;
    variant?: LabelVariants;
}
