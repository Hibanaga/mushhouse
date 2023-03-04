import ApiCategory from 'types/api/Category';

export default class Category {
    id?: string;
    name?: string;
    slug?: string;

    constructor(data: ApiCategory) {
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
    }
}
