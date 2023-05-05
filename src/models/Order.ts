import ApiOrder, { OrderProduct } from 'types/api/Order';

export interface OrderFormattedProduct {
    id: string;
    name: string;
    quantity: number;
    price: string;
    totalPrice: string;
}

export default class Order {
    id: string;
    number?: string;
    firstName?: string;
    lastName?: string;
    country?: string;
    phone?: string;
    postalCode?: string;
    email?: string;
    address?: string;

    products?: OrderFormattedProduct[];

    fullDisplayName?: string;
    fullDisplayAddress?: string;

    constructor(data: ApiOrder) {
        this.id = data.id;
        this.number = data?.number && data.number;
        this.email = data?.email && data.email;
        this.firstName = data?.address?.first_name && data?.address?.first_name;
        this.lastName = data?.address?.last_name && data?.address?.last_name;
        this.country = data?.address?.country && data?.address?.country;
        this.postalCode = data?.address?.postal_code && data?.address?.postal_code;
        this.phone = data?.address?.phone && data?.address?.phone;
        this.address = data?.address?.address1 && data?.address?.address1;

        this.products = data.items && this.getProductsList(data.items);

        this.fullDisplayName = this.getFullDisplayName(data?.address?.first_name, data?.address?.last_name);
        this.fullDisplayAddress = this.getFullDisplayAddress(data?.address?.city, data?.address?.postal_code);
    }


    getFullDisplayName(firstName?: string, lastName?: string) {
        return firstName && lastName ? `${firstName} ${lastName}` : '';
    }

    getFullDisplayAddress(address?: string, postalCode?: string) {
        return address && postalCode ? `${address}, ${postalCode}` : '';
    }

    getProductsList(products: OrderProduct[]):OrderFormattedProduct[]  {
        return products?.map((element) => ({
            id: element.id,
            name: element.product_name,
            quantity: element.quantity,
            price: element.price_without_discount.toFixed(2),
            totalPrice: (element.price_without_discount * element.quantity).toFixed(2),
        }));
    };
}
