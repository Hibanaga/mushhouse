import { ReactNode } from 'react';

import { Option } from 'types/options';

export enum SelectTypes {
    Primary = 'primary',
    Contained = 'contained',
}

export interface Props {
    label?: string;
    multiline?: boolean;
    placeholder?: string;
    options: Option<any>[];
    onChange?: (nextValue: Option<any>) => any;
    onChangeMulti?: (nextValue: Option<string> | Option<string>[]) => any;
    customClassName?: string;
    wrapperCss?: string;
    error?: string;
    value: Option<any> | Option<string>[] | null;
    type?: SelectTypes;
    hasSelectAllButton?: boolean;
    subDescription?: ReactNode;
}
