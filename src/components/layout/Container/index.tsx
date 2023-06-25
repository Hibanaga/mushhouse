import { ReactNode } from 'react';

import Component from './component';

export interface Props {
  children: ReactNode
  className?: string;
}


Component.defaultProps = {
};

export default Component;
