import ShoppingCartProduct from 'models/ShoppingCartProduct';

export interface Props {
    shoppingCart: ShoppingCartProduct[];
    onRemove: (id: string) => void;
}
