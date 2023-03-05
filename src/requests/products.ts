import axios from 'axios';

import { PaginationParams } from 'types/options';

import Product from 'models/Product';

export const list = async (params?: { [key: string]: string | boolean | number }): Promise<{ meta: PaginationParams, elements: Product[] }> => {
    const { data } = await axios({ url: 'https://api.szamanita-pantherina.com/api/product', method: 'GET', params })
        .then((data) => data);

    return {
        meta: { totalCount: data.count, page: data.page },
        elements: data.results.map((element: any) => new Product(element)),
    };
};

export const single = async (id: string, params?: Record<string, string>): Promise<Product> => {
    const { data } = await axios({ url: `https://api.szamanita-pantherina.com/api/product/${id}`, method: 'GET', params })
        .then((data) => data);

    return data;
};
