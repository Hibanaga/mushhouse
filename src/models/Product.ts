import ApiProduct from 'types/api/Product';

export default class Product {
    id?: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;
    weight?: number;

    countReviews?: number;
    fullDescriptionDisplay?: string;
    accesibility?: boolean;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.imageUrl = data.imageUrl;
        this.price = data.price;
        this.category = data.category;
        this.weight = data.weight;
        this.images = data.images;

        this.accesibility = data.accesibility;
        this.countReviews = data.countReviews;
        this.fullDescriptionDisplay = data.fullDescriptionDisplay;
    }
}
