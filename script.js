let library = [];
let currentBookId = 0;

function Book(title, author, pageNumber, readStatus, id) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
  this.id = id;
}

function createBookCard(book) {
  const bookSection = document.querySelector(".book-section");
  const bookCard = document.createElement("article");
  const bookTitle = document.createElement("h2");
  const authorInfo = document.createElement("div");
  const pageInfo = document.createElement("div");
  const readInfo = document.createElement("div");

  bookTitle.innerText = book.title;
  authorInfo.innerText = book.author;
  pageInfo.innerText = book.pageNumber;
  readInfo.innerText = book.readStatus;

  bookCard.setAttribute("data-id", book.id);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(authorInfo);
  bookCard.appendChild(pageInfo);
  bookCard.appendChild(readInfo);
  bookSection.appendChild(bookCard);
}

function renderBooks(library) {
  library.forEach((book) => {
    createBookCard(book);
  });
}

function addBookToLibrary(book) {
  library.push(book);
}

function clearInputs() {
  document.getElementById("new-title").value = "";
  document.getElementById("new-author").value = "";
  document.getElementById("new-pages").value = "";
}

//const newBookButton = document.querySelector(".add-new-book-button");

//newBookButton.addEventListener("click", () => {});

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const newBookButton = document.querySelector(".add-new-book-button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const addBookButton = document.querySelector(".add-button");

//Add book to the books array
addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTitle = document.getElementById("new-title");
  const newAuthor = document.getElementById("new-author");
  const newPages = document.getElementById("new-pages");
  const read = document.getElementById("read-select");

  //check read selection is selected or not
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    read.checked,
    currentBookId
  );

  currentBookId += 1;
  addBookToLibrary(newBook);
  createBookCard(newBook);
  clearInputs();
  modal.style.display = "none";
  console.log(library);
});

// When the user clicks on the button, open the modal
newBookButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

renderBooks(library);
