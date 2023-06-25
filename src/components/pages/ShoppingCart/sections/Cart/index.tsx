import Delivery from 'models/Delivery';
import Product from 'models/Product';

import Component from './component';

export interface Props {
  delivery: Delivery[]
  shoppingCart?: Product[]
}

Component.defaultProps = {
};

export default Component;
