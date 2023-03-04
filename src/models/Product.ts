import ApiBrand from 'types/api/Brand';

import Crowd from 'models/Crowd';

import { TypenamesModels } from 'consts/models';

export default class Product {
    __typename: keyof typeof TypenamesModels;
    id: string;
    name?: string;
    slug?: string;
    logo?: {
        w180?: string;
    };
    crowd?: Crowd;

    constructor(data: ApiBrand) {
        this.__typename = data.__typename;
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.logo = data.logo;
        this.crowd = data.crowd && new Crowd(data.crowd);
    }
}
