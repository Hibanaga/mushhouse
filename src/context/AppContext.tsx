import { Context, createContext, FunctionComponent, ReactElement, useContext, useState } from 'react';

import Category from 'models/Category';
import Product from 'models/Product';

import { list as listCategories } from 'requests/categories';
import { list as listProducts } from 'requests/products';

import { ShoppingCartProps } from '../types/options';
import { getItem, setItem } from '../utils/localStorage';

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
        const arrayIds = params?.shoppingIds.map(({ id }: ShoppingCartProps) => id);
        const { elements } = await listProducts({ products: arrayIds.join(',') });

        setShoppingCart(elements);
    };

    const handleRemoveShoppingCartElement = (productId: string) => {
        const parseStorageCart = JSON.parse(getItem('shoppingCart') as string);
        const shoppingCartList = parseStorageCart.filter((element: ShoppingCartProps) => element.id !== productId);
        setItem('shoppingCart', JSON.stringify(shoppingCartList));
        setShoppingCart(shoppingCart.filter(({ id }) => id !== productId));
    };

    const handleAddShoppingCartElement = (product: Product) => {
        const storageCart = getItem('shoppingCart');

        let shoppingCart = null;
        if (!storageCart) {
            shoppingCart = [{ id: product.id, quantity: 1 }];
        } else {
            const parseStorageCart = JSON.parse(storageCart);

            if (parseStorageCart.some(({ id }: {id: string}) => id === product.id )) {
                shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id ? { id: element.id, quantity: element.quantity + 1 } : element);
            } else {
                shoppingCart = [ ...parseStorageCart, { id: product.id, quantity: 1 } ];
            }
        }
        setItem('shoppingCart', JSON.stringify(shoppingCart));

        return shoppingCart;
    };


    return {
        categories,
        shoppingCart,
        fetchCategories,
        fetchShoppingCart,
        onRemoveElement: handleRemoveShoppingCartElement,
        onAddElement: handleAddShoppingCartElement,
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
