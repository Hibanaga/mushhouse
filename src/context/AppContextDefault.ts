import { AppContextProps } from './AppContextProps';


export const AppContextDefaults: AppContextProps = {
    categories: [],
    shoppingCart: [],
    fetchCategories: () => null,
    fetchShoppingCart: () => null,
};
