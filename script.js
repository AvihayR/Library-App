//Query selectors
const modal = document.querySelector('.modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');

//Modal
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', () => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

//

let library = [];

function createBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

createBook.prototype.info = function () {
  return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
};

function addBookToLibrary(title, author, pages, read) {
  let newObj = new createBook(title, author, pages, read);
  return library.push(newObj);
}

console.log(library);
