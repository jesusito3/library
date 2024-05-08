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
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function display() {
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

const newBookButton = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const submitButton = document.getElementById("submit");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
})

