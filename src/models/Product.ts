import ApiProduct from 'types/api/Product';

export default class Product {
    id: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;
    weight?: number;

    fullDisplayName?: string;
    accesibility?: boolean;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.name = data.name && data.name;
        this.description = data?.description?.description_long && data?.description?.description_long;
        this.imageUrl = data?.description?.media && data?.description?.media[0].file;
        this.price = data.price && data.price;
        this.category =  data?.category?.name && data?.category?.name;
        this.images = data?.description?.media && data?.description?.media.map(({ file }) => file);

        this.accesibility = data?.active ?? false;
        this.fullDisplayName = data.name && data.main_attribute && this.getDisplayedName(data.name, data.main_attribute);
    }

    getDisplayedName(nameProduct: string, categoryInfo: Record<string, string> ) {
        return `${nameProduct}/${Object.values(categoryInfo).join(' ')}`;
    }
}
