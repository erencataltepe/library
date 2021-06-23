let library = [
  {
    title: "Deneme",
    author: "Deneme",
    pageNumber: 120,
    readStatus: true,
    id: 0,
  },
  {
    title: "Deneme",
    author: "Deneme",
    pageNumber: 120,
    readStatus: true,
    id: 1,
  },
  {
    title: "Deneme",
    author: "Deneme",
    pageNumber: 120,
    readStatus: true,
    id: 2,
  },
  {
    title: "Deneme",
    author: "Deneme",
    pageNumber: 120,
    readStatus: true,
    id: 3,
  },
  {
    title: "Deneme",
    author: "Deneme",
    pageNumber: 120,
    readStatus: true,
    id: 4,
  },
  {
    title: "Deneme",
    author: "Deneme",
    pageNumber: 120,
    readStatus: true,
    id: 5,
  },
];
let currentBookId = 6;

//Book constructor function
function Book(title, author, pageNumber, readStatus, id) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
  this.id = id;
}

//Create bookcard html for a book object
function createBookCard(book) {
  const bookSection = document.querySelector(".book-section");
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const authorInfo = document.createElement("div");
  const pageInfo = document.createElement("div");
  const readInfo = document.createElement("div");
  const removeButton = document.createElement("button");
  const toggleReadStatusButton = document.createElement("button");

  //Create toggle read status button and add event listener
  toggleReadStatusButton.classList.add("toggle-read-status-button");
  toggleReadStatusButton.textContent = "Change Read Status";
  toggleReadStatusButton.setAttribute("data-id", book.id);
  toggleReadStatusButton.addEventListener("click", (e) => {
    toggleReadStatus(e.target.dataset.id);
  });

  removeButton.classList.add("remove-buttons");
  removeButton.textContent = "Remove Book";
  removeButton.setAttribute("data-id", book.id);
  removeButton.addEventListener("click", (e) => {
    removeBook(e.target.dataset.id);
  });

  bookTitle.innerText = book.title;
  authorInfo.innerText = "By " + book.author;
  pageInfo.innerText = book.pageNumber + " pages";
  if (book.readStatus) {
    readInfo.innerText = "Read";
  } else {
    readInfo.innerText = " Not Read";
  }

  readInfo.classList.add("read-status");

  bookCard.setAttribute("data-id", book.id);
  bookCard.classList.add("book-cards");
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(authorInfo);
  bookCard.appendChild(pageInfo);
  bookCard.appendChild(readInfo);
  bookCard.appendChild(removeButton);
  bookCard.appendChild(toggleReadStatusButton);
  bookSection.appendChild(bookCard);
}

//Render all books in the library array to the page
function renderBooks(library) {
  library.forEach((book) => {
    createBookCard(book);
  });
}

//Add book to the library array
function addBookToLibrary(book) {
  library.push(book);
}

//Clear modal inputs values after submit new book.
function clearInputs() {
  document.getElementById("new-title").value = "";
  document.getElementById("new-author").value = "";
  document.getElementById("new-pages").value = "";
}

//Remove Book
function removeBook(removeId) {
  removeBookFromLibrary(removeId);
  removeBookFromLayout(removeId);
}

function toggleReadStatus(bookId) {
  changeReadStatusOfBook(bookId);
  changeReadStatusOnBookCard(bookId);
}

//Toggle read status on library array
function changeReadStatusOfBook(id) {
  library.forEach((book) => {
    if (book.id == id) {
      if (book.readStatus) {
        book.readStatus = false;
      } else {
        book.readStatus = true;
      }
    }
  });
}

//Toggle read status on html layout
function changeReadStatusOnBookCard(id) {
  const bookCards = document.querySelectorAll(".book-cards");
  bookCards.forEach((bookCard) => {
    if (bookCard.dataset.id == id) {
      const readStatus = bookCard.querySelector(".read-status");
      if (readStatus.textContent == "Read") {
        readStatus.textContent = "Not Read";
      } else {
        readStatus.textContent = "Read";
      }
    }
  });
}

//Remove book from library
function removeBookFromLibrary(id) {
  const tempLibrary = library.filter((book) => book.id != id);
  library = tempLibrary;
}

//Remove book from layout
function removeBookFromLayout(id) {
  const bookCards = document.querySelectorAll(".book-cards");
  bookCards.forEach((bookCard) => {
    if (bookCard.dataset.id == id) {
      bookCard.remove();
    }
  });
}

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
