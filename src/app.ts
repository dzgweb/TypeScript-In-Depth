import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./intefaces";
import { ReferenceItem, UniversityLibrarian, Shelf } from "./classes";
import RefBook from './classes/encyclopedia';
import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './lib/utility-functions';
import Encyclopedia from "./classes/encyclopedia";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =========================================================================================
// Task 01
// logFirstAvailable(getAllBooks());

// Task 02
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// Task 03
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

// console.log(getBookByID(2));

// Task04
// const myId = createCustomerID('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Anna', 21));

// Task 05
// createCustomer('Franck');
// createCustomer('Franck', 35);
// createCustomer('Franck', 35, 'New York');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();

// const titles = сheckoutBooks('Ann', 1, 2, 4);
// console.log(titles);

// Task 06
// const checkOutBooks = getTitles('Evan Burchard');
// console.log(checkOutBooks);

// Task 07
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// } 

// printBook(myBook);
// myBook.markDamaged(`missing back cover`);

// Task 08
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);

// logDamage(`missing back cover`);

// Task 09

// const favoriteAuthor: Author = {
//   email: 'a@a.com',
//   name: 'Ann',
//   numBooksPublished: 10
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@a.com',
//   department:'Classical Literature',
//   assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };

// Task 10
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Boris');


// Task 11

// const ref = new ReferenceItem('Title', 2019);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Ann';
// console.log(ref.publisher);


// Task 12
// const refBook = new Encyclopedia('Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();

// Task 13
// refBook.printCitation();

// Task15
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);

// logDamage(`missing back cover`);

// Task 16
// const refBook = new RefBook('Title', 2019, 10);
// console.log(refBook);
// refBook.printItem();

// Task 18
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ]; 
// let result: Book[] | number[] = purge(inventory);
// console.log(result);

// result = purge([1, 2, 3, 4, 5]);
// console.log(result);

// Task 19
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);


// const magazines: Magazine[] = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMagazine = magazineShelf.getFirst();
// console.log(firstMagazine);


// Task 20
// magazineShelf.printTitles();
// const mag = magazineShelf.find('Five Points');
// console.log(mag);

// Task 22
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Ann';
// fLibrarian['printLibrarian']();  // вызов метода

// Task23
// const flib = new UniversityLibrarian();
// flib.assistFaculty = null;
// flib.teachCommunity = () => console.log('1230');

// Task 24
// const refBook = new Encyclopedia('Title', 2019, 10);
// refBook.printItem();

// Task 25
// const flib = new UniversityLibrarian();
// flib.name = 'Anna';
// flib.assistCustomer('Boris');

// Task 26
// const fLib = new UniversityLibrarian();
// fLib.name = 'Anna';
// console.log(fLib);
// console.log(fLib.name);

// Task 27
// const refBook = new Encyclopedia('Title', 2019, 10);
// refBook.copies = 10;
// console.log(refBook.copies);
// refBook.copies = -10;
// console.log(refBook.copies);

// Task 28
// console.log(`start searching...`);
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log(`finisg searching`);

// Task 29
// console.log(`start searching...`);
// getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
//   console.log(`Found titles: ${titles}`);
//   return titles.length;
// })
// .then(numOftitle => console.log(`NumOfTitles: ${numOftitle}`))
// .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software);
// console.log(`finisg searching`);

// Task 30
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');
