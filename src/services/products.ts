import axios from 'axios';

import Product from 'models/Product';

export const listProducts = async (params?: Record<string, string>): Promise<Product[]> => {
    const { data } = await axios({ url: 'http://api.szamanita-pantherina.com/api/product', method: 'GET', params }).then((data) => {
        return data;
    });

    return data.map((element: any) => new Product({
        ...element,
        category: element.category.name,
        imageUrl: element.description.media[0].file,
        images: element.description.media,
    }));
};
export const singleProduct = async (id: string, params?: Record<string, string>): Promise<Product> => {
    const { data } = await axios({ url: `http://api.szamanita-pantherina.com/api/product/${id}`, method: 'GET', params }).then((data) => {
        return data;
    });

    return new Product({
        ...data,
        accesibility: data.active,
        category: data.category.name,
        imageUrl: data.description.media[0].file,
        description: data.description.description_long,
        fullDescriptionDisplay: data.description.description_short,
        countReviews: 2,
        images: data.description.media.map((({ file }: any) => file)),
    });
};
