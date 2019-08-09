let myLibrary = []

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}


function addBookToLibrary(book){
  myLibrary.push(book);
  render();

}


const hobbit = new Book("The Hobbit", "Tolkein", 220, true);
const got = new Book("Game of Thrones", "Martin", 920, false);

myLibrary.push(hobbit);
myLibrary.push(got);



function removeBook(index){
  myLibrary.splice(index, 1);
  render();
  }


function render() {
  const tableBody = document.querySelector("tbody");
    if (tableBody.children.length > 0) {
      while (tableBody.children.length !== 0) {
        tableBody.removeChild(tableBody.lastChild);
    }
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let status = myLibrary[i].readStatus;

    const tableRow = document.createElement("tr");
    const bookNum = document.createElement("td");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const readStatus = document.createElement("td");
    const readStatusForm = document.createElement("INPUT");
    readStatusForm.type = "checkbox";
    const removeElement = document.createElement("td");
    const removeButton = document.createElement("button");


    tableBody.appendChild(tableRow);
    tableRow.setAttribute("data-index", `${i}`);
    tableRow.appendChild(bookNum);
    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(pages);
    tableRow.appendChild(readStatus);
    readStatus.appendChild(readStatusForm);
    tableRow.appendChild(removeElement);
    removeElement.appendChild(removeButton);

    bookNum.textContent = `${i + 1}`;
    title.textContent = `${myLibrary[i].title}`;
    author.textContent = `${myLibrary[i].author}`;
    pages.textContent = `${myLibrary[i].pages}`;
    readStatusForm.checked = status;
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", (event) => {
      let deleteRowIndex = event.target.parentElement.parentElement.getAttribute("data-index");
      removeBook(deleteRowIndex);
    });




  }

    const tableRow = document.createElement("tr");
    const bookNum = document.createElement("td");
    const title = document.createElement("td");
    const titleForm = document.createElement("INPUT");
    const author = document.createElement("td");
    const authorForm = document.createElement("INPUT");
    const pages = document.createElement("td");
    const pagesForm = document.createElement("INPUT");
    const readStatus = document.createElement("td");
    const readStatusForm = document.createElement("INPUT");
    const addElement = document.createElement("td");
    const addButton = document.createElement("button");

    tableBody.appendChild(tableRow);
    tableRow.setAttribute("id", "newBookForm");
    tableRow.appendChild(bookNum);
    tableRow.appendChild(title);
    title.appendChild(titleForm);
    titleForm.setAttribute("id", "title");

    tableRow.appendChild(author);
    author.appendChild(authorForm);
    authorForm.setAttribute("id", "author");

    tableRow.appendChild(pages);
    pages.appendChild(pagesForm);
    pagesForm.setAttribute("id", "pages");

    tableRow.appendChild(readStatus);
    readStatus.appendChild(readStatusForm);
    readStatusForm.setAttribute("id", "readStatus");
    readStatusForm.type = "checkbox";

    tableRow.appendChild(addElement);
    addElement.appendChild(addButton);


    titleForm.placeholder = "Title";
    authorForm.placeholder = "Author";
    pagesForm.placeholder = "Pages";
    readStatusForm.placeholder = "Read";
    addButton.textContent = "Add";

    const addBookForm = document.querySelector("#newBookForm");
    // console.log(addBookForm);

    addButton.addEventListener("click", (event) => {
      const title = document.querySelector("#title").value;
      const author = document.querySelector("#author").value;
      const pages = document.querySelector("#pages").value;
      const readStatus = document.querySelector("#readStatus").checked;

      book = new Book(title, author, pages, readStatus);
      addBookToLibrary(book);

    });
};


render();
