/*eslint-disable no-redeclare */

import { Category } from "./enum";
import { Book, Callback, LibMgrcallBack, TOptions } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";
import RefBook from './classes/encyclopedia'


export function getAllBooks(): readonly Book[] {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true }, { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false }, { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true }, { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(book => book.available === true)?.title;
    console.log(`First Available book: ${title}`);
}

export function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books
        .filter(book => book.category === inputCategory)
        .map(({ title }) => title)
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title))
}

export function getBookById(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function chekoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);

    return bookIDs.map(id => getBookById(id))
        .filter(book => book.available)
        .map(book => book.title)
}
// ====================================================
// Taask 02.01
export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];
    return [title, author];
}

export function cuclTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const r = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(r)
}

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript))
// console.log(getBookAuthorByIndex(0))
// console.log(getBookAuthorByIndex(0))
// cuclTotalPages()

// =================================================
// Task 03.01
export function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`
}
// const myID: string = createCustomerID('Ann', 10)

// console.log(myID);

// let idGenerator:(name:string, id: number) => string;
// let idGenerator:typeof createCustomerID;
// idGenerator = (name:string, id: number) => `${id}/${name}`;
// console.log(idGenerator('Boris', 20))

// =================================================
// Task 03.02
export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`castomer name: ${name}`)

    if (age) {
        console.log(`customer age: ${age}`)
    }

    if (city) {
        console.log(`customer city: ${city}`)
    }
}

// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));
// console.log(logFirstAvailable());

// console.log(getBookById(0));
// console.log(chekoutBooks('NoName Customer', ...[1, 3, 4]));


// ================================================
// Task 03.03
export function getTtitles(author: string): string[];
export function getTtitles(available: boolean): string[];
export function getTtitles(id: number, available: boolean): string[];
export function getTtitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);

        }

    } else if (args.length === 2) {
        const [id, available] = args;
        return books.filter(book => book.id === id && book.available === available).map(book => book.title);

        if (typeof id === 'number' && typeof available === 'boolean') {

        }
    }

    return [];
}

// console.log(getTtitles(1, true));
// console.log(getTtitles(true));
// console.log(getTtitles(false));
// console.log(getTtitles('Lea Verou'));

export function assertStringValue(data: any): asserts data is string {
    if (typeof data != 'string') {
        throw new Error('value should hasve been a string')
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook')
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

// console.log(bookTitleTransform('Learn typeScript'))

// ==================================================
// Task 04.01
export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`)
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    // markDamaged:(reason: string) => console.log(`Damaged: ${reason}`)
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    }
};

// printBook(myBook);
// console.log(myBook.markDamaged('missinng back cover'));

// ===================================================

// console.log(offer.magazine);
// console.log(offer.magazine?.gettitle());
// console.log(offer.book.gettitle?.());
// console.log(offer.book.author?.[10]);

// Task 04.05

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions) {
    options.duration ??= 100;
    options.speed ??= 60;
    return options
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem()
}

// GENERICS
export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}//T[]=Array<T>

// export function getBookByCategory(category: Category, callback: LibMgrcallBack): void {
export function getBookByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles)
            } else {
                throw new Error('No books found')
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles)
    }
}

export function getBookByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles)
            } else {
                reject('No books found')
            }

        }, 2000);
    });

    return p;
};

export async function logSearchResult(category: Category) {
    const titles = await getBookByCategoryPromise(category);
    console.log(titles.length)
    return titles;
}

