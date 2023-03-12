import { Context, createContext, FunctionComponent, ReactElement, useContext, useState } from 'react';

import Category from 'models/Category';
import Product from 'models/Product';

import { list as listCategories } from 'requests/categories';
import { list as listProducts, single as singleProduct } from 'requests/products';

import { AppContextDefaults } from './AppContextDefault';
import { AppContextProps } from './AppContextProps';


const AppContext: Context<AppContextProps> = createContext(AppContextDefaults);
const AppState = (): AppContextProps => {
    const [shoppingCart, setShoppingCart] = useState<Product[] | []>([]);
    const [categories, setCategories] = useState<Category[] | []>([]);

    const fetchCategories = async (params: any) => {
        const { elements } = await listCategories(params);

        setCategories(elements);
    };

    const fetchShoppingCart = async (params: any) => {
        const arrayIds = params?.shoppingIds.map(({ id }: any) => id);

        arrayIds && await Promise.all(arrayIds.map((element: string) => singleProduct(element))).then((array) => {
            const shoppingCartProduct = array.map((element) => new Product({ ...element, quantity: params?.shoppingIds?.find((item: { id: string, quantity: number }) => element?.id === item.id)?.quantity }));
            setShoppingCart(shoppingCartProduct);
        });
    };


    return {
        categories,
        shoppingCart,
        fetchCategories,
        fetchShoppingCart,
    };
};


const AppContextProvider: FunctionComponent<{ children: ReactElement }> = ({ children }) => {
    const state = AppState();

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('Context must be used within a ContextProvider');
    }
    return context;
};

export { AppContextProvider, useAppContext, AppContext };
