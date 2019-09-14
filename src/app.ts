showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =========================================================================================
enum Category {
  JavaScript,
  CSS, 
  HTML,
  TypeScript, 
  Angular
}


function getAllBooks(): Array<object> {
  let books: Array<object> = [
    { 
      title: 'Refactoring JavaScript', 
      author: 'Evan Burchard', 
      available: true,
      category: Category.JavaScript
    },
    { 
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene', 
      available: false,
      category: Category.JavaScript
    },
    { 
      title: 'CSS Secrets',
      author: 'Lea Verou', 
      available: true,
      category: Category.CSS
    },
    { 
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ]

  return books;
}

function logFirstAvailable(books: Array<any>): void{
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

function getBookTitlesByCategory(category: Category): Array<string> {
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

function logBookTitles(titles: string[]): void {
  for (const title of titles) {
    console.log(title);
  }
}
// =========================================================================================
// Task 01
// logFirstAvailable(getAllBooks());

// Task 02
logBookTitles(getBookTitlesByCategory(Category.JavaScript));