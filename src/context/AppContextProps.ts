import Category from 'models/Category';

export interface AppContextProps {
    categories?: Category[];
    fetchCategories?: (params?: any) => void;
}
