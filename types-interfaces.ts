type Person = {
  name: string;
  age: number;
  email: string;
};

const person: Person = {
  name: "Oscar",
  age: 29,
  email: "oscar@mail.com",
};

interface Book {
  title: string;
  author: string;
  pages: number;
}

const books: Book[] = [
  { title: "First Book", author: "Alex", pages: 500 },
  { title: "Second Book", author: "Max", pages: 120 },
  { title: "Third Book", author: "Ana", pages: 200 },
];

const displayBookInfo = (book: Book) => {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
};

books.forEach((book) => displayBookInfo(book));
