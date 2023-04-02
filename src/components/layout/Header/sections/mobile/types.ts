import { ReactNode } from 'react';

export interface Props {
  isOpenMobileDrawer: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
}
