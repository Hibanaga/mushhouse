import Product from 'models/Product';

import Component from './component';

export interface Props {
  shoppingCart?: Product[]
}

Component.defaultProps = {
};

export default Component;
