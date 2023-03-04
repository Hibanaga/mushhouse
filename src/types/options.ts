export interface Option<Value> {
    label: string;
    value: Value;
    data?: any;
}

export interface OptionName<Value> {
    name: string;
    value: Value;
}

export interface PaginationParams {
    page: number;
    perPage: number
}
