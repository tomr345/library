let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

const plus = document.getElementById("plus");
const overlay = document.getElementById("overlay");
const submitBtn = document.getElementById("submit");

plus.addEventListener('click', () => {
    overlay.style.display = "block";
})

submitBtn.addEventListener('click', () => {
    const newTitle = document.getElementById("title").value;
    const newAuthor = document.getElementById("author").value;
    const newPages = document.getElementById("pages").value;
    const isReadStatus = document.querySelector('input[name="read-status"]:checked').value;

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
    
}
