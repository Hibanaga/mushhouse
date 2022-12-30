import ApiProduct from 'types/api/Product';

export default class Product {
    id?: string;
    name?: string;
    imageUrl?: string;
    price?: number;
    category?: string;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.imageUrl;
        this.price = data.price;
        this.category = data.category;
    }
}
