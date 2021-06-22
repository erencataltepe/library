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

renderBooks(books);
