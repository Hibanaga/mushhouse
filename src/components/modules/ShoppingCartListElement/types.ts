import Product from 'models/Product';

export interface Props {
    product: Product;
    onUpdateShoppingCart: (product: Product, quantity: number) => void;
}
