import ApiProduct, { ProductExtendedAttribute } from 'types/api/Product';
import { OptionName } from 'types/options';

export default class Product {
    id: string;
    name?: string;
    description?: string;
    shortDescription?: string;
    imageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;
    weight?: number;

    fullDisplayName?: string;
    priceDisplay?: 0 | undefined | string;
    categories?: OptionName<string>[];
    accesibility?: boolean;
    quantity?: number;
    totalPrice?: number;
    totalPriceDisplay?: false | string;

    constructor(data: ApiProduct) {
        this.id = data.id;
        this.name = data.name && data.name;
        this.description = data?.description?.description_long && data?.description?.description_long;
        this.shortDescription = data?.description?.description_short && data?.description?.description_short;
        this.imageUrl = data?.description?.media && data?.description?.media[0].file;
        this.price = data.price && data.price;
        this.category =  data?.category?.name && data?.category?.name;
        this.images = data?.description?.media && data?.description?.media.map(({ file }) => file);

        this.accesibility = data?.active ?? false;
        this.fullDisplayName = data.name && data.main_attribute && this.getDisplayedName(data.name, data.main_attribute);
        this.categories = data?.description?.attributes && this.getCategories(data?.description?.attributes);
        this.priceDisplay = data.price && this.getFormattedPrice(data.price ?? 0);
        this.quantity = data?.quantity;
        this.totalPrice = data?.price && data?.quantity && this.getTotalPrice(data.price, data.quantity);
        this.totalPriceDisplay = !!this.totalPrice && this.getTotalPriceDisplay(this?.totalPrice);
    }

    getDisplayedName(nameProduct: string, categoryInfo: Record<string, string> ) {
        return `${nameProduct} ${Object.values(categoryInfo).reverse().join(' ')}`;
    }

    getCategories(arrayAttributes: ProductExtendedAttribute[]): OptionName<string>[] {
        return arrayAttributes && arrayAttributes.map((element: ProductExtendedAttribute) => ({
            name: element?.attribute?.name ?? '',
            value: element.value && element.unit ? `${element.value} ${element.unit}` : element.value ? element.value : '',
        }));
    }

    getTotalPrice (price: number, quantity: number) {
        return price * quantity;
    }

    getFormattedPrice (price: number): string {
        return `${price} PLN`;
    }

    getTotalPriceDisplay (totalPrice: number) {
        return totalPrice ? this.getFormattedPrice(totalPrice) : '0 PLN';
    }
}
