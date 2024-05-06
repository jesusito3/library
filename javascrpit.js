const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${this.read}`;
    }
}

// const book1 = new Book("Northanger Abbey", "Jane Austen", 235, "read");
// console.log(book1.info());

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("Northanger Abbey", "Jane Austen", 235, "read");
addBookToLibrary("Avatar, The Last Airbender: The Rise of Kyoshi", "F.C. Yee", 448, "read");

function display() {
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

display();