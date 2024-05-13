const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const table = document.getElementById("table");
const button = document.createElement("BUTTON");
const btnText = document.createTextNode("Read/Not read");
button.appendChild(btnText);

function display() {
    let row = table.insertRow(-1);

    let titleColumn = row.insertCell(0);
    let authorColumn = row.insertCell(1);
    let pagesColumn = row.insertCell(2);
    let readColumn = row.insertCell(3);
    let readBtnColumn = row.insertCell(4);
    readBtnColumn.appendChild(button);
    for(i = 0; i < myLibrary.length; i++) {
        

        titleColumn.innerHTML = myLibrary[i].title;
        authorColumn.innerHTML = myLibrary[i].author;
        pagesColumn.innerHTML = myLibrary[i].pages;
        readColumn.innerHTML = myLibrary[i].read;
        
    }
    console.log(myLibrary);
}

const newBookButton = document.getElementById("new-book");
const dialog = document.getElementById("dialog");
const submitButton = document.getElementById("submit");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let pagesInput = document.getElementById("pages");
    let readInput = document.getElementById("read");
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    display();
    event.preventDefault();
    dialog.close();
})

