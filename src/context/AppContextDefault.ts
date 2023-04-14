import Product from 'models/Product';

import { AppContextProps } from './AppContextProps';


export const AppContextDefaults: AppContextProps = {
    shoppingCart: [],
    storageShoppingCart: [],
    fetchShoppingCart: () => null,
    onRemoveElement: (productId: string) => null,
    onAddElement: (product: Product) => [],
};
