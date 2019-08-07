export class Book {

    id: string;
    title: string;
    author: string;
    rating: number;
    done: boolean;

    constructor(init?: Partial<Book >) {
        Object.assign(this, init);
    }
}
