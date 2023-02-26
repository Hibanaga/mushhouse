export default interface ShoppingCartProduct {
    id?: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;
    weight?: number;
    quantity?: number;

    accesibility?: boolean;
    countReviews?: number;
    fullDescriptionDisplay?: string;
}
