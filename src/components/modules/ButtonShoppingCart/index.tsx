import Component from './component';

Component.defaultProps = {
};

import Product from 'models/Product';

export interface Props {
  shoppingCart?: Product[];
}

export default Component;
