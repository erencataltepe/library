let books = [
  {
    title: "Çalıkuşu",
    author: "Reşat Nuri Güntekin",
    pages: 354,
    readStatus: true,
  },
  {
    title: "Nutuk",
    author: "Mustafa Kemal Atatürk",
    pages: 560,
    readStatus: false,
  },
];

function Book(title, author, pageNumber, readStatus) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
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
  pageInfo.innerText = book.pages;
  readInfo.innerText = book.readStatus;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(authorInfo);
  bookCard.appendChild(pageInfo);
  bookCard.appendChild(readInfo);
  bookSection.appendChild(bookCard);
}

function renderBooks(books) {
  books.forEach((book) => {
    createBookCard(book);
  });
}

//const newBookButton = document.querySelector(".add-new-book-button");

//newBookButton.addEventListener("click", () => {});

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const newBookButton = document.querySelector(".add-new-book-button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const addBookButton 

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

renderBooks(books);
