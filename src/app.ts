import { ReferenceItem, UL, RefBook, Shelf } from "./classes";
import { purge, setDefaultConfig, printRefBook, getAllBooks, getObjectProperty, createCustomer, getBookByCategory, logCategorySearch, getBookByCategoryPromise, logSearchResult } from "./functions";
import { Book, Librarian, Logger, TOptions, Magazine } from "./interfaces";
import { Library } from "./classes/library";
import { Category } from "./enum";
import { BookRequiredField, CreateCustomerFunctionType, UpdatedBook } from "./types";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// =============================================
// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missinng back cover');

// ===================================================
// Task 04.03



// const author: Author = {
//     email: 'author@mail.com',
//     name: 'author',
//     numBookPublished: 2,
// }



// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'Anna@mail.com',
//     numBookPublished: 2
// }

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'Boris@mail.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// }

// Task 04.04
const offer: any = {
    book: {
        title: 'Essential typeScript',
    },
}


// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// ==================================================
// Task 05.01

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// console.log(ref.printItem());
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// =======================================
// Task 05.02, 05.03


// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();

// Task 05.04


// const favoriteLibrarian: Librarian = new Ul.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('boris', 'learn type script');

// ===========================
// Task 05.05

// const personBook: PersonBook ={
//     name: 'Anna',
//     author: 'Anna',
//     available: true,
//     category: Category.JavaScript,
//     email: 'anna@xample.com',
//     id: 1,
//     title: 'unknown'
// }





// const options: TOptions = {duration: 20};
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options,options2));


// =====================================
// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// =====================================
// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//     .then(o => {
//         const reader = new o.Reader();
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[0]);

//         console.log(reader);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete!'))
// }

// if (flag) {
//     const o = await import('./classes');

//         const reader = new o.Reader();
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[0]);

//         console.log(reader);
//     }

// =====================================
// Task 06.06
// let libary: Library = new Library();
// let libary: Library = {
// id: 1,
// address: '',
// name: 'anna'
// };

// =====================================
// Task 07.01 GENERICS
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge(inventory);
// console.log(result);
// const result2 = purge([1,2,3]);
// console.log(result2);

// Task 07.02, 07.03
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
//     ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

//     magazineShelf.printTitle();
//   console.log(magazineShelf.find('Five Points'));


// Task 07.03
// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[1], 'author'));

// Task 07.04
// const bookRequiredField: BookRequiredField = {
//     author: 'Anna',
//     title: 'unknown',
//     id: 3,
//     available: true,
//     category: Category.JavaScript,
//     pages: 200,
//     markDamaged: null
// }

// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages:100
// }

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01, 08.02
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;

// console.log(favoriteLibrarian1)

// Task 08.03
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculy = null;
// favoriteLibrarian.teachCommunity = null;

// Task 08.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem()

// Task 08.05
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 08.05
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// console.log(favoriteLibrarian)

// Task 08.07
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.copies = 10;
// console.log(refBook.copies)

// Task 09.01
// console.log('Begin');
// getBookByCategory(Category.JavaScript, logCategorySearch);
// getBookByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBookByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         // return titles.length;
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBookByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
console.log('Begin');
logSearchResult(Category.JavaScript);
logSearchResult(Category.Software).catch(err => console.log(err));
console.log('End');
// export NODE_OPTIONS=--openssl-legacy-provider
// =================================
