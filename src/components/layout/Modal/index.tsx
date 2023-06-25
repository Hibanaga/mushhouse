import { ReactNode } from 'react';

import Component from './component';

export interface Props {
  children?: ReactNode;
  hasCancelButton?: boolean;
  onClose: () => any;
}


Component.defaultProps = {};
export default Component;
