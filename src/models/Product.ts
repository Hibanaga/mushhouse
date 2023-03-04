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
    fullDisplayName?: string;
    fullDescriptionDisplay?: string;
    accesibility?: boolean;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.name = data.name && data.name;
        this.description = data.description && data.description;
        this.imageUrl = data.imageUrl && data.imageUrl;
        this.price = data.price && data.price;
        this.category =  data.category && data.category;
        this.weight = data.weight && data.weight;
        this.images = data.images && data.images;

        this.accesibility = data.accesibility;
        this.countReviews = data.countReviews;
        this.fullDisplayName = data.name && data.main_attribute && this.getDisplayedName(data.name, data.main_attribute);
        this.fullDescriptionDisplay = data.fullDescriptionDisplay;
    }


    getDisplayedName(nameProduct: string, categoryInfo: Record<string, string> ) {
        return `${nameProduct}/${Object.values(categoryInfo).join(' ')}`;
    }
}
