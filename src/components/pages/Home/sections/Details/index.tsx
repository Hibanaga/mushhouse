import Product from 'models/Product';

import Component from './component';

export interface Props {
  products: Product[]
}

Component.defaultProps = {
};

export default Component;
