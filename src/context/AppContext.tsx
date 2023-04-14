import { Context, createContext, FunctionComponent, ReactElement, useContext, useState } from 'react';

import { ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

import { getItem, setItem } from 'utils/localStorage';

import { list as listProducts } from 'requests/products';

import { AppContextDefaults } from './AppContextDefault';
import { AppContextProps } from './AppContextProps';


const AppContext: Context<AppContextProps> = createContext(AppContextDefaults);
const AppState = (): AppContextProps => {
    const [storageShoppingCart, setStorageShoppingCart] = useState<ShoppingCartProps[] | []>([]);
    const [shoppingCart, setShoppingCart] = useState<Product[] | []>([]);

    const fetchShoppingCart = async (params: any) => {
        const shoppingCart = getItem('shoppingCart');
        const parsedShoppingCart = JSON.parse(shoppingCart as string);

        const arrayIds = params?.shoppingIds.map(({ id }: ShoppingCartProps) => id);
        const { elements } = await listProducts({ products: arrayIds.join(',') });

        const products = parsedShoppingCart.map((element: ShoppingCartProps) => {
            const searchElement = elements.find((product) => product.id === element.id);
            return new Product({ ...element, ...searchElement });
        });

        setShoppingCart(products);
        setStorageShoppingCart(parsedShoppingCart);
    };

    const handleRemoveShoppingCartElement = (productId: string) => {
        const parseStorageCart = JSON.parse(getItem('shoppingCart') as string);
        const shoppingCartList = parseStorageCart.filter((element: ShoppingCartProps) => element.id !== productId);
        setItem('shoppingCart', JSON.stringify(shoppingCartList));
        setShoppingCart(shoppingCart.filter(({ id }) => id !== productId));
    };

    const handleAddShoppingCartElement = (product: Product, quantity: number) => {
        const storageCart = getItem('shoppingCart');

        let shoppingCart = null;
        if (!storageCart) {
            shoppingCart = [{ id: product.id, quantity: quantity }];
        } else {
            const parseStorageCart = JSON.parse(storageCart);

            if (parseStorageCart.some((element: { id: string  }) => element.id === product.id)) {
                shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id ? { id: element.id, quantity: element.quantity + quantity } : element);
            } else {
                shoppingCart = [ ...parseStorageCart, { id: product.id, quantity: quantity } ];
            }
        }

        setItem('shoppingCart', JSON.stringify(shoppingCart));
        setStorageShoppingCart(shoppingCart);
    };


    return {
        shoppingCart,
        storageShoppingCart,
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
