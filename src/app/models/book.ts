import { Reader } from "./reader";

export class Book {
    bookID: number;
    title: string;
    author: string;
    publicationYear: number;
    voters:Reader[];
}
