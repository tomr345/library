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
plusBtn.addEventListener('click', addOverlay);
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', addBookToShelf);
let readStatusBtn;
let readStatusButtonClasses;

//elements need for adding books
const overlay = document.getElementById("overlay");
const newTitleField = document.getElementById("title");
const newAuthorField = document.getElementById("author");
const newPagesField = document.getElementById("pages");
// const isReadStatusField = document.querySelector('input[name="read-status"]:checked');
const isReadStatusField = document.getElementsByName('read-status');
//readStatus to store the value of the button
let readStatus;

function displayBook() {
    const main = document.querySelector('.main');
    const book = document.createElement('div');
    book.classList.add('book');

    const title = document.createElement('p');
    title.setAttribute('id', "bookTitle");
    title.innerHTML = `${newTitleField.value}`;

    const author = document.createElement('p');
    author.setAttribute('id', "bookAuthor");
    author.innerHTML = `${newAuthorField.value}`;

    const pages = document.createElement('p');
    pages.setAttribute('id', "bookPages");
    pages.innerHTML = `${newPagesField.value} pages`;

    const buttons = document.createElement('div');
    buttons.classList.add('bookReadStatus');

    const readBtn = document.createElement('button');
    readBtn.innerHTML = `${readStatus}`;
    if (readStatus === "Read") {
        readBtn.classList.add('homepageBtn', 'read');
    }
    else {
        readBtn.classList.add('homepageBtn', 'unread');
    }
    readBtn.setAttribute('id', "readStatus");
    readBtn.addEventListener('click', toggleReadStatus);
    buttons.appendChild(readBtn);

    const remove = document.createElement('button');
    remove.innerHTML = "Remove";
    remove.classList.add('homepageBtn', 'remove');
    remove.addEventListener('click', deleteBook);
    buttons.appendChild(remove);

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(buttons);
    main.appendChild(book);
}

function addBookToShelf() {
    const newTitle = newTitleField.value;
    const newAuthor = newAuthorField.value;
    const newPages = newPagesField.value;
    // const isReadStatus = isReadStatusField.value;

    for (let i = 0; i < isReadStatusField.length; i++) {
        if (isReadStatusField[i].checked) {
            readStatus = isReadStatusField[i].id;
        } 
    }

    //create nnew book
    const book = new Book(newTitle, newAuthor, newPages, readStatus);
    myLibrary.push(book);
    console.log(myLibrary);

    //add book to shelf and reset fields
    displayBook();
    reset();
}

function deleteBook(e) {
    e.currentTarget.parentNode.parentNode.remove();
}

function toggleReadStatus(e) {
    const classes = e.target.className.split(' ');
    if (classes.includes('read')) {
        e.target.classList.remove('read');
        e.target.classList.add('unread');
        e.target.innerHTML = "Unread";
    }
    else {
        e.target.classList.remove('unread');
        e.target.classList.add('read');
        e.target.innerHTML = "Read";
    }
}

function addOverlay() {
    overlay.style.display = "block";
}

function reset() {
    overlay.style.display = "none";
    clearInputFields();
}

function clearInputFields() {
    newTitleField.value = '';
    newAuthorField.value = '';
    newPagesField.value = '';
}
