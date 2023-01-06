import { ReactNode } from 'react';

export enum DrawerPosition {
    Top = 'top',
    Left = 'left',
    Right = 'right',
    Bottom = 'bottom',
}

export interface Props {
    isOpen: boolean,
    className?: string;
    position?: DrawerPosition;
    children?: ReactNode;
    onClose?: () => void;
}
