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

//Iterate on the library array and render each book as a card:
function displayBooks() {
  library.map((item) => {
    const elementItem = document.createElement('div');
    let index = library.indexOf(item);
    let allCards = document.querySelectorAll('.card');
    //
    let xBtn = document.createElement('span');
    xBtn.classList.add('close', 'remove-card');
    xBtn.innerHTML = '&times;';
    elementItem.appendChild(xBtn);
    //Validate non-dupes:
    if (
      Array.from(allCards).some((c) => {
        return c.classList.contains(index);
      })
    ) {
      return;
    } else {
      //Create elements for inner card:
      item.info().map((value) => {
        let innerCardElement = document.createElement('p');
        innerCardElement.classList.add('card-value');
        innerCardElement.innerHTML = value;
        elementItem.appendChild(innerCardElement);
      });
      gridContainer.appendChild(elementItem);
    }
    elementItem.classList.add('card');
    elementItem.classList.add(index);
    elementItem.dataset.number = index;

    xBtn = document.querySelectorAll('.remove-card');
    xBtn.forEach((btn) => {
      btn.addEventListener('click', removeCard);
    });

    clearInputValues();
  });
}

//Render values of form input fields on click:
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

//clear all input values when adding a new book:
function clearInputValues() {
  formInputs.map((i) => {
    i.value = '';
  });
  closeBtn.click();
}

//remove card/obj from Array+UI:
function removeCard() {
  const selectedCardNumber = this.parentElement.dataset.number;
  //remove chosen object from library array:
  library = library.filter((e) => {
    return library.indexOf(e) !== parseInt(selectedCardNumber);
  });
  //remove card from UI:
  gridContainer.removeChild(this.parentElement);
}

//

/*


*/
