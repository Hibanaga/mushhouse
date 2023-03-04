import { Context, createContext, FunctionComponent, ReactElement, useContext, useState } from 'react';

import Category from 'models/Category';

import { list } from 'requests/categories';

import { AppContextDefaults } from './AppContextDefault';
import { AppContextProps } from './AppContextProps';


const AppContext: Context<AppContextProps> = createContext(AppContextDefaults);
const AppState = (): AppContextProps => {
    const [categories, setCategories] = useState<Category[] | []>([]);

    const fetchCategories = async (params: any) => {
        const { elements } = await list(params);

        setCategories(elements);
    };


    return {
        categories,
        fetchCategories,
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
