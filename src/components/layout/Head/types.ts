import { ReactNode } from 'react';

export interface Props {
    title: string;
    name?: string;
    description?: string;
    children?: ReactNode;
}

