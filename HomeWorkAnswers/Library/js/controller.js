const html = document.querySelector("#bookList");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

//Input
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

function render() {
    bookList.renderWithTemplate(library.books, html, template);
}

let editId = null;
let validForm = true;

bookForm.addEventListener("submit", function(e){
    e.preventDefault();
  
    let book = {
                     
            id: editId,
         title: titleInput.value,
        author: authorInput.value,
          year: yearInput.value,
         genre: genreInput.value
    }; 
 
    /*let invalidElements = document.querySelectorAll(".invalid");
    
    if (invalidElements.length == 0) {*/
    
    for (let i = 0; i < form.elements.length; i++) {
         const element = form.elements[i];
         let valid = validateElement(element);
         console.log(valid);
         if (valid == false) {
            validForm = false;
            //e.preventDefault();
         }

    }
    if (validForm == true){
      if (editId == null) {
         library.add(book);
      }else{
         library.update(editId, book);
         editId = null; 
      }   

     render();
    }
});

function remove(id){
    library.remove(id);
    render();
}

function edit(id){
    const book = library.find(id);

    editId = book.id;

    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    render();
}

function findBook(title){
     return library.findToTitle(title);
}


render();