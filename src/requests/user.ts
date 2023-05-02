
export interface MakeOrder {
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
    address2: string,
    first_name: string,
    last_name: string
  },
  delivery: {
    name: string,
    price: number,
    slug: string
  }
}

export const makeOrder = async (params: any) => {
    return null;
};
