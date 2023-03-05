export default interface Product {
    id: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    images?: string[];
    price?: number;
    category?: string;
    weight?: number;
    main_attribute?: Record<string, string>

    accesibility?: boolean;
    countReviews?: number;
    fullDescriptionDisplay?: string;
}
