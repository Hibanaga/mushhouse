import moment, { Moment } from 'moment';

import ApiPost from 'types/api/Blog';

export default class Blog {
    id?: string;

    constructor(data: ApiPost) {
        this.id = data.id;
    }
}
