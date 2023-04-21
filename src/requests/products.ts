import axios from 'axios';

import { PaginationParams } from 'types/options';

import Product from 'models/Product';

import { getItem } from '../utils/localStorage';

export interface ListRequestParams {
    active?: boolean;
    category?: string;
    has_discount?: boolean;
    max_price?: number;
    min_price?: number;
    page?: number;
    page_size?: number;
    price?: number;
    products?: string;
    weight?: number;
}

export const list = async (params?: ListRequestParams): Promise<{ meta: PaginationParams, elements: any[] }> => {
    const storageCart = getItem('shoppingCart');
    const { data } = await axios({ url: 'https://api.szamanita-pantherina.com/api/product', method: 'GET', params })
        .then((data) => data);

    // .map((element: any) => new Product({ ...element, quantity: storageCart ? JSON.parse(storageCart)?.find((item: ShoppingCartProps) => element?.id === item.id)?.quantity : 0 })
    return {
        meta: { totalCount: data.count, page: data.page },
        elements: data.results,
    };
};

export const single = async (id: string, params?: Record<string, string>): Promise<Product> => {
    const { data } = await axios({ url: `https://api.szamanita-pantherina.com/api/product/${id}`, method: 'GET', params })
        .then((data) => data);

    return data;
};
