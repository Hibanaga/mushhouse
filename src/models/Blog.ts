import moment, { Moment } from 'moment';

import ApiBlog from 'types/api/Blog';

export default class Blog {
    id?: string;
    imageUrl?: string;
    createdAt?: Moment | null;
    headline?: string;
    description?: string;

    createdAtDisplay?: string | null;
    countComments?: number;

    constructor(data: ApiBlog) {
        this.id = data.id;
        this.imageUrl = data.imageUrl;
        this.createdAt = data.createdAt && moment(data.createdAt) || null;
        this.headline = data.headline;
        this.description = data.description;

        this.createdAtDisplay = data.createdAt ? moment(data.createdAt).format('ll') : null;
        this.countComments = data.countComments;
    }
}
