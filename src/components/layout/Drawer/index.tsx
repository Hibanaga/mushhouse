import { ReactNode } from 'react';

import Component from './component';

export interface Props {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
}


Component.defaultProps = {
};

export default Component;
