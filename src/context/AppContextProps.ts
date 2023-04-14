import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

export interface AppContextProps {
    shoppingCart?: Product[];
    storageShoppingCart?: ShoppingCartProps[],
    fetchShoppingCart?: (params?: any) => void;
    onAddElement?: (product: Product, quantity?: number) => void;
}
