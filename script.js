let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

//buttons
const plusBtn = document.getElementById("plus");
const submitBtn = document.getElementById("submit");

//variables need for adding books
const overlay = document.getElementById("overlay");
const newTitleField = document.getElementById("title");
const newAuthorField = document.getElementById("author");
const newPagesField = document.getElementById("pages");
const isReadStatusField = document.querySelector('input[name="read-status"]:checked');

plusBtn.addEventListener('click', () => {
    overlay.style.display = "block";
})

submitBtn.addEventListener('click', () => {
    const newTitle = newTitleField.value;
    const newAuthor = newAuthorField.value;
    const newPages = newPagesField.value;
    const isReadStatus = isReadStatusField.value;

    const book = new Book(newTitle, newAuthor, newPages, isReadStatus);
    myLibrary.push(book);
    //get rid of this at the end
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
    reset();
})

function reset() {
    overlay.style.display = "none";
    clearInputFields();
}

function clearInputFields() {
    newTitleField.value = '';
    newAuthorField.value = '';
    newPagesField.value = '';
}
