import ApiDelivery from 'types/api/Delivery';

export default class Delivery {
    id?: string;
    name?: string;
    slug?: string;
    price?: number;

    constructor(data: ApiDelivery) {
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.price = data.price;
    }
}
