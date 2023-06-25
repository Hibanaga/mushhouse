import Delivery from 'models/Delivery';

import Component from './component';

export interface Props {
  delivery: Delivery[]
}

Component.defaultProps = {
};

export default Component;
