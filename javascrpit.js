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

function addBookToLibrary(title, author, pages, read) {
    let newTitle = prompt("Title of book?");
    let newAuthor = prompt("Author of book?");
    let newPages = prompt("Number of pages?");
    let newRead = prompt("Read or not read?");
    title = newTitle;
    author = newAuthor;
    pages = newPages;
    read = newRead;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function display() {
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}