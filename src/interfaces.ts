import { Category } from './enum';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
};

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name?: string;
    email: string;
}

interface Author extends Person {
    numBookPublished: number;
    name: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrcallBack {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export { Author, Book, Librarian, Person, TOptions, Magazine, ShelfItem, DamageLogger as Logger, LibMgrcallBack, Callback }