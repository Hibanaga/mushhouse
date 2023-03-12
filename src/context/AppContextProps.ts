import Category from 'models/Category';
import Product from 'models/Product';

export interface AppContextProps {
    categories?: Category[];
    shoppingCart?: Product[];
    fetchCategories?: (params?: any) => void;
    fetchShoppingCart?: (params?: any) => void;
}
