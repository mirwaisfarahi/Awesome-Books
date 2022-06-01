/* eslint-disable */
// Class for book object
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
/* eslint-enable */

class Methods {
  // get local storage data
  static getData() {
    return JSON.parse(localStorage.getItem('books'));
  }

  // set local storage data
  static setData(books) {
    return localStorage.setItem('books', JSON.stringify(books));
  }

  // reload the page
  static reloadPage() {
    window.location.reload();
    return false;
  }

  // Remove book
  static remove(index) {
    const books = this.getData();
    books.splice(index, 1);
    this.setData(books);
    this.reloadPage();
  }

  // display book
  static display() {
    const books = this.getData();
    const bookList = document.querySelector('#booksList');

    if (books) {
      for (let book = 0; book < books.length; book += 1) {
        const li = document.createElement('li');

        li.innerHTML = `<span class="name">${books[book].title} by ${books[book].author}</span>
                      <span class="delete">Remove</span>
                  `;
        bookList.appendChild(li);
      }
    }

    const removeBook = document.querySelectorAll('.delete');
    removeBook.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.remove(index);
      });
    });
  }

  // Add Book
  static add(bookTitle, bookAuthor) {
    let existingBooks = this.getData();
    if (existingBooks == null) existingBooks = [];

    const book = new Book(bookTitle, bookAuthor);

    // Save allBooks back to local storage
    existingBooks.push(book);
    this.setData(existingBooks);
    this.reloadPage();
  }
}

// Event to display books
document.addEventListener('Content', Methods.display());

// get form data to add it
const bookForm = document.querySelector('#add-book');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  Methods.add(title, author);
});
