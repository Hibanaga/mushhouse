export default interface Blog {
    id?: string;
    imageUrl?: string;
    createdAt?: Date;
    headline?: string;
    description?: string;

    countComments?: number;
}
