

class Library{
constructor(){
    this.myLibrary = [];
    this.bookDisplayDiv = document.querySelector("#library");
    this.removeElement = document.querySelector("#remove");
    this.newBookButton = document.querySelector("#new-book-btn");
    this.newBookForm = document.querySelector("#new-book-form");
    
    this.newBookButton.addEventListener("click", () => {
        this.newBookForm.style.display = "block";
    });

    this.newBookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        this.removeElement.style.display = "block";
        this.addBookToLibrary();
    });
}

 Book(title, author, length, read) {
    return{
    title,
    author,
    length,
    read,
    readToggle(){
        this.read = !this.read
    }}
    
  
}


readToggle(index){
    this.myLibrary[index].readToggle();
    this.populateDisplay();
}



addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let length = document.querySelector("#length").value;
    let read = document.querySelector("#read").checked;
    let newBook = this.Book(title, author, length, read);
    this.myLibrary.push(newBook);
    this.populateDisplay();
}



populateDisplay(){
    this.bookDisplayDiv.innerHTML='';
    for (let i = 0; i< this.myLibrary.length; i++){
          const book = this.myLibrary[i]; 
      const titleElement = document.createElement("div");
      titleElement.innerHTML = `<p>${book.title}</p>`;
      const authorElement = document.createElement("div");
      authorElement.innerHTML = `<p>Author: ${book.author}</p>`;
      const lengthElement = document.createElement("div");
      lengthElement.innerHTML = `<p>Length: ${book.length}</p>`;
      const readElement = document.createElement("p");
      readElement.textContent = `Read: ${book.read ? "Yes" : "No"}`;
      
      this.removeElement.textContent = "Remove";
      this.removeElement.addEventListener("click", () => {
        this.removeBook(i); // Now 'this' refers to the Library instance
    });
      
     
    this.bookDisplayDiv.appendChild(titleElement);
    this.bookDisplayDiv.appendChild(authorElement);
    this.bookDisplayDiv.appendChild(lengthElement);
    this.bookDisplayDiv.appendChild(readElement);
    this.bookDisplayDiv.appendChild(this.removeElement);
    
    }}


    removeBook(index){
        this.myLibrary.splice(index, 1)
        this.populateDisplay();
    }
    
    
   
}




const library = new Library();


