//Query selectors
const modal = document.querySelector('.modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');
const gridContainer = document.querySelector('.grid-container');
const submitBtn = document.getElementById('submit-btn');
const form = document.querySelector('form');
let formInputs = form.querySelectorAll('input');

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

//Object constructor:
function createBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Object prototype for inheritance:
createBook.prototype.info = function () {
  return [this.title, this.author, this.pages, this.read];
};

//Function to add objects into an array using the obj constructor:
function addBookToLibrary(title, author, pages, read) {
  let newObj = new createBook(title, author, pages, read);
  return library.push(newObj);
}

//Iterate on the library array and display each book:
function displayBooks() {
  library.map((item) => {
    let elementItem = document.createElement('div');
    elementItem.classList.add('card');
    item.info().map((value) => {
      let innerCardElement = document.createElement('p');
      innerCardElement.classList.add('card-value');
      innerCardElement.innerHTML = value;
      elementItem.appendChild(innerCardElement);
    });
    gridContainer.appendChild(elementItem);
  });
}

//Render values of form input fields without "Submitting" the form
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  formInputs = Array.from(formInputs).filter((v) => {
    return v.type !== 'submit';
  });
  let formInputValues = formInputs.map((e) => {
    if (e.type == 'checkbox') {
      return e.checked;
    } else {
      return e.value;
    }
  });
  addBookToLibrary(...formInputValues);
  displayBooks();
});
