import axios from 'axios';

export interface MakeOrderParams {
  email: string;
  cart: {
    products: { id: string, quantity: number }[],
    discount: number;
  }
  address: {
    phone: string,
    country: string,
    city: string,
    postal_code: string,
    address1: string,
    address2?: string,
    first_name: string,
    last_name: string
  },
  delivery: {
    name: string,
    price: number,
    slug: string
  }
}

export const makeOrder = async (body: MakeOrderParams) => {
    const { data } = await axios.post('https://api.szamanita-pantherina.com/api/order/new-order', body);

    console.log('data: ', data);
};
