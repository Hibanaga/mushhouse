import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children?: ReactNode;
}


Component.defaultProps = {
    children: 'Oops. We couldn’t find any results.',
};
export default Component;
