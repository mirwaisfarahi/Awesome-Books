
// Operations Class will be used to add and remove book
class Operations {
  // get local storage data
  static getData() {
    return JSON.parse(localStorage.getItem('books'));
  }

  // set local storage data
  static setData(books) {
    localStorage.setItem('books', JSON.stringify(books));
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

    for (const book in books) {
      const tr = document.createElement('tr');

      tr.innerHTML = `<td>${books[book].title}</td>
                <td>${books[book].author}</td>
                <td><button class = "remove-book">Delete</a></td>
                `;
      bookList.appendChild(tr);
    }

    const removeBook = document.querySelectorAll('.remove-book');
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

    const book = { title: bookTitle, author: bookAuthor };

    // Save allBooks back to local storage
    existingBooks.push(book);
    this.setData(existingBooks);
    this.reloadPage();
  }
}

// Event to display books
document.addEventListener('Content', Operations.display());

// get form data to add it
const bookForm = document.querySelector('#bookForm');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  Operations.add(title, author);
});
