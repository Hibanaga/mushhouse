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
    const [cart, setCart] = useState<Product[] | []>([]);

    const fetchShoppingCart = async (params: { products?: string }) => {
        const shoppingCart = getItem('shoppingCartSzamanita');
        let parsedShoppingCart: ShoppingCartProps[] = JSON.parse(shoppingCart as string);

        const { elements } = await listProducts(params);

        if (Array.isArray(parsedShoppingCart)) {
            parsedShoppingCart = parsedShoppingCart?.filter((element) => {
                return elements.map((element) => element.id).includes(element.id);
            });

            setItem('shoppingCartSzamanita', JSON.stringify(parsedShoppingCart));
        }

        const products = parsedShoppingCart?.map((element: ShoppingCartProps) => {
            const searchElement = elements.find((product) => product.id === element.id);
            return new Product({ ...element, ...searchElement });
        });

        setCart(products);
        setStorageShoppingCart(parsedShoppingCart);
    };

    const handleAddShoppingCartElement = (product: Product, quantity?: number) => {
        const storageCart = getItem('shoppingCartSzamanita');

        let shoppingCart = null;
        if (!storageCart) {
            shoppingCart = [{ id: product.id, quantity: 1 }];
        } else {
            const parseStorageCart = JSON.parse(storageCart);

            if (parseStorageCart.some((element: { id: string  }) => element.id === product.id)) {
                if (quantity) {
                    shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id ? { id: element.id, quantity: quantity } : element);
                } else {
                    shoppingCart = parseStorageCart.map((element: ShoppingCartProps) => element.id === product.id ? { id: element.id, quantity: element.quantity + 1 } : element);
                }
            } else {
                if (quantity) {
                    shoppingCart = [ ...parseStorageCart, { id: product.id, quantity: quantity } ];
                } else {
                    shoppingCart = [ ...parseStorageCart, { id: product.id, quantity: 1 } ];
                }
            }
        }

        setItem('shoppingCartSzamanita', JSON.stringify(shoppingCart));
        setStorageShoppingCart(shoppingCart);

        setCart((prevCart: any) => {
            const existingProduct = prevCart?.find((element: Product) => element.id === product.id);
            if (existingProduct) {
                return prevCart.map((element: Product) =>
                    element.id === product.id ? { ...element, quantity: element.quantity ? element.quantity + 1 : 1 } : element,
                );
            } else {
                return Array.isArray(prevCart) ? [...prevCart, { ...product, quantity: 1 }] : [{ ...product, quantity: 1 }];
            }
        });
    };

    const handleRemoveShoppingCartElement = (product: Product) => {
        const storageCart = storageShoppingCart.filter((element) => element.id !== product.id);
        setStorageShoppingCart(storageCart);
        setCart(cart.filter((element) => element.id !== product.id));

        setItem('shoppingCartSzamanita', JSON.stringify(storageCart));
    };


    return {
        shoppingCart: cart,
        storageShoppingCart,
        fetchShoppingCart,
        onAddElement: handleAddShoppingCartElement,
        onRemoveElement: handleRemoveShoppingCartElement,
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
