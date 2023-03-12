import axios from 'axios';

import { PaginationParams, ShoppingCartProps } from 'types/options';

import Product from 'models/Product';

import { getItem } from '../utils/localStorage';

export const list = async (params?: { [key: string]: string | boolean | number }): Promise<{ meta: PaginationParams, elements: Product[] }> => {
    const storageCart = getItem('shoppingCart');
    const { data } = await axios({ url: 'https://api.szamanita-pantherina.com/api/product', method: 'GET', params })
        .then((data) => data);

    return {
        meta: { totalCount: data.count, page: data.page },
        elements: data.results.map((element: any) => new Product({ ...element, quantity: storageCart ? JSON.parse(storageCart)?.find((item: ShoppingCartProps) => element?.id === item.id)?.quantity : 0 })),
    };
};

export const single = async (id: string, params?: Record<string, string>): Promise<Product> => {
    const { data } = await axios({ url: `https://api.szamanita-pantherina.com/api/product/${id}`, method: 'GET', params })
        .then((data) => data);

    return data;
};
