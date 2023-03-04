import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    hasCancelButton?: boolean;
    onClose: () => any;
}
