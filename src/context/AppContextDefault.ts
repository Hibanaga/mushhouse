import Product from 'models/Product';

import { AppContextProps } from './AppContextProps';


export const AppContextDefaults: AppContextProps = {
    shoppingCart: [],
    storageShoppingCart: [],
    fetchShoppingCart: () => null,
    onAddElement: (product: Product) => [],
    onRemoveElement: (product: Product) => [],
};
