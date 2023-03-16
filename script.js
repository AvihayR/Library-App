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

function createBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

createBook.prototype.info = function () {
  return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
};

//const avici = new createBook('avic', 'mastul', 128, 'read');
//console.log(avici.info());

let library = [];
function addBookToLibrary() {}
