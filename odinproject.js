function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    if (read == true){
       statement = "I've read the book.";
    } else{
       statemnet = "I've not read the book.";
    }
    return (title + " is by " + author + " and is " + pages + " pages long. " + statement);
  }
}

const hobbit = new Book("Hobbit", "Bob", 150, true)


console.log(hobbit.info())


// function Player(name, marker) {
//   this.name = name
//   this.marker = marker
//   this.sayName = function() {
//     console.log(name)
//   }
// }




let myLibrary = []

