// get local storage data
const getData = () => JSON.parse(localStorage.getItem('books'));

// set local storage data
const setData = (books) => localStorage.setItem('books', JSON.stringify(books));

// reload the page
const reloadPage = function () {
  window.location.reload();
  return false;
};

// Remove book
const remove = function (index) {
  const books = getData();
  books.splice(index, 1);
  setData(books);
  reloadPage();
};

// display book
const display = function () {
  const books = getData();
  const bookList = document.querySelector('#booksList');

  for (let book = 0; book < books.length; book += 1) {
    const tr = document.createElement('tr');

    tr.innerHTML = `<td>${books[book].title} by ${books[book].author}</td>
                <td><button class = "remove-book">Delete</a></td>
                `;
    bookList.appendChild(tr);
  }

  const removeBook = document.querySelectorAll('.remove-book');
  removeBook.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      remove(index);
    });
  });
};

// Add Book
const add = function (bookTitle, bookAuthor) {
  let existingBooks = getData();
  if (existingBooks == null) existingBooks = [];

  const book = { title: bookTitle, author: bookAuthor };

  // Save allBooks back to local storage
  existingBooks.push(book);
  setData(existingBooks);
  reloadPage();
};

// Event to display books
document.addEventListener('Content', display());

// get form data to add it
const bookForm = document.querySelector('#bookForm');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  add(title, author);
});
