import ShoppingCartProduct from 'models/ShoppingCartProduct';

export interface Props {
    product: ShoppingCartProduct;
    onRemove: (id: string) => void;
}
