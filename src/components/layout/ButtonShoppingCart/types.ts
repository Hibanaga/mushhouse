import Product from 'models/Product';

export interface Props {
    isOpenShoppingCart: boolean;
    shoppingCart: Product[];
    onToggle: () => void;
}
