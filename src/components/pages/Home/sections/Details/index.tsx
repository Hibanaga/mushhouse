import { PaginationParams } from 'types/options';

import Product from 'models/Product';

import Component from './component';

export interface Props {
  meta: PaginationParams | null;
  products: Product[] | null;
  onChange: (filterKey: string, value: string | number | boolean) => void;
}

Component.defaultProps = {
};

export default Component;
