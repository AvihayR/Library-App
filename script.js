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
