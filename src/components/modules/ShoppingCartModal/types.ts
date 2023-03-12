import Product from 'models/Product';

export interface Props {
    shoppingCart: Product[];
    onClose: () => void;
}
