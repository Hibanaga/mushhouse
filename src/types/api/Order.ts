export interface OrderProduct {
  id: string;
  product_name: string;
  price_without_discount: number;
  quantity: number;
}

export default interface Order {
  id: string;
  number?: string;
  email?: string;
  address?: {
    address1: string;
    city: string;
    country: string
    first_name: string
    last_name:string
    phone: string
    postal_code: string
  },
  items: OrderProduct[]
}
