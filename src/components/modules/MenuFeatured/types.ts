import { Option } from 'types/options';

import Product from 'models/Product';

export interface Props {
    elements: Product[] | null;
    selectedCategory: Option;
    onChangeCategory: (nextValue: Option) => void;
}
