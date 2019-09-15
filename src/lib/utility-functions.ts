import { Book, LibMgrCallback } from "../intefaces";
import { Category } from "../enums";
import { resolve } from "url";
import { rejects } from "assert";

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Array<Book> {
  let books: Array<Book> = [
    { 
      id: 1,
      title: 'Refactoring JavaScript', 
      author: 'Evan Burchard', 
      available: true,
      category: Category.JavaScript
    },
    { 
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene', 
      available: false,
      category: Category.JavaScript
    },
    { 
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou', 
      available: true,
      category: Category.CSS
    },
    { 
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ]

  return books;
}

export function logFirstAvailable(books: Array<any> = getAllBooks()): void{
  const numberOfBooks = books.length;

  let title = '';

  for(const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }

  console.log(`Total Books ${numberOfBooks}`);
  console.log(`First Available Books ${title}`);

}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  console.log(`Category: ${Category[category]}`);

  const books:any[] = getAllBooks();
  const titles: string[] = [];

  for(const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function logBookTitles(titles: string[]): void {
  for (const title of titles) {
    console.log(title);
  }
}

export function getBookByID(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find((book: any) => book.id === id)
}


export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
  console.log(`Customer Name ${name}`);

  if (age) {
    console.log(`Customer Age: ${age}`);
  }

  if (city) {
    console.log(`Customer City: ${city}`);
  }

}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer Name: ${customer}`);
  const titles: string[] = [];

  for(const id of bookIDs){
    const book = getBookByID(id);
    if (book && book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty: string | boolean): string[] {
  const books: any[] = getAllBooks();
  const titles: string[] = [];

  if (typeof bookProperty === 'string') {
    return books
      .filter(book => book.author === bookProperty)
      .map(book => book.title);
  }
  else if (typeof bookProperty === 'boolean') {
    return books
      .filter(book => book.available === bookProperty)
      .map(book => book.title);
  }
}


export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`)
}

export function getBooksByCategory(
  category: Category,
  callback: LibMgrCallback
) {
  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);

      if (titles.length > 0) {
        callback(null, titles);
      }
      else {
        throw new Error('No books found.');
      }
    }
    catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void{
  if (err) {
    console.log(`Error messege: ${err.message}`);
  } else {
    console.log(`Found the following books`);
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, rejects) => {
    setTimeout(() => {
      const titles: string[] = getBookTitlesByCategory(category);
  
      if (titles.length > 0) {
        resolve(titles);
      }
      else {
        rejects('No books found.');
      }
    }, 2000);
  });

  return p;
}

export async function logSearchResults(category: Category) {
  let foundBooks = await getBooksByCategoryPromise(category);
  console.log(foundBooks);
}