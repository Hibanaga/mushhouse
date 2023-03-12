import Product from 'models/Product';

import { AppContextProps } from './AppContextProps';


export const AppContextDefaults: AppContextProps = {
    categories: [],
    shoppingCart: [],
    fetchCategories: () => null,
    fetchShoppingCart: () => null,
    onRemoveElement: (productId: string) => null,
    onAddElement: (product: Product) => [],
};
