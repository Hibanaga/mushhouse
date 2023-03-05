export type ProductAttribute = {
    unit?: string;
    value?: string
};

export type ProductMediaType = {
    id?: string;
    file: string;
};

export interface ProductExtendedAttribute extends ProductAttribute{
    id: string;
    attribute: { id?: string, name?: string, slug?: string }
}


export default interface Product {
    id: string;
    discount_price?: number;
    discount?: number | null;
    main_attribute?: ProductAttribute;
    name?: string;
    price?: number;
    slug?: string;
    active?: boolean;
    description?: {
        id?: string;
        active?: boolean;
        attributes?: ProductExtendedAttribute[];
        description_long?: string;
        description_short?: string;
        media?: ProductMediaType[];
    },
    category?: {
        id?: string;
        name?: string;
        slug?: string;
        parent_category?: string;
    }
}
