// Book Class to initiate a book object for the book details
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Operations Class will be used to add and remove book
class Operations {
    
    // display book
    static display() {

        let books = JSON.parse(localStorage.getItem('books'));
        const bookList = document.querySelector('#booksList');

        for(let book in books) {
            const tr = document.createElement('tr');

            tr.innerHTML =
                `<td>${books[book].title}</td>
                <td>${books[book].author}</td>
                <td><a href="#">Delete</a></td>
                `;
                bookList.appendChild(tr);
        }
    }

    // Remove book
    // static remove(book) {
    //     console.log(book)
    // }

    // Add Book
    static add(title, author) {
        let existingBooks = JSON.parse(localStorage.getItem("books"));
        if (existingBooks == null) existingBooks = [];
        
        const book = new Book(title, author);
        // localStorage.setItem('book', JSON.stringify(book));

        // Save allBooks back to local storage
        existingBooks.push(book);
        localStorage.setItem("books", JSON.stringify(existingBooks));

        // this.display();
    }
}

// Event to display books
 document.addEventListener('Content', Operations.display());

const bookForm = document.querySelector('#bookForm');

bookForm.addEventListener('submit', function (e) {
    
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    Operations.add(title, author);
});

bookForm.addEventListener('event', function(e) {
    console.log(e.target);
})