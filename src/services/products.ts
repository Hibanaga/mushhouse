import axios from 'axios';

import Product from 'models/Product';

// Promise<Product[]>
export const listProducts = async (params?: Record<string, string>): Promise<any> => {
    const { data } = await axios({ url: 'http://api.szamanita-pantherina.com/api/product', method: 'GET', params }).then((data) => {
        return data;
    });

    console.log('data: ', data);

    return data.map((element: any) => new Product({
        ...element,
        category: element.category.name,
        imageUrl: element.description.media[0].file,
        images: element.description.media,
    }));
};
