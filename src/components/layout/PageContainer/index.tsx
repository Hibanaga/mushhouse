import { ReactNode } from 'react';

import Component from './component';

export interface Props {
  children: ReactNode | null;
}


Component.defaultProps = {};
export default Component;
