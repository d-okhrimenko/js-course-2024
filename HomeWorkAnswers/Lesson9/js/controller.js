let html = document.querySelector("#bookList");
let template = document.querySelector("#templateBook").innerHTML;
const formHead = document.querySelector("#formHead");
const currentIndex=document.getElementById("currentIndex");
const delBook=document.getElementById("delBook");
function render() {
    renderBooks.renderWithTemplate(dataBooks.listBooks, html, template);
}

function isObjEmpty(obj) {
    let a=0
    let b=0
    for (const val of Object.values(obj)) {
        if (val) {
            a+=1;
        }
    }
   
    if (a==b) {
      return true;
    } else {
        return false;
    }
  }

function currentStatus(status) {
    switch(status) {
        case 'add':
            document.getElementById("addBook").style.display='inline';
            document.getElementById("saveBook").style.display='none';
            break;
        case 'edit':
            document.getElementById("addBook").style.display='none';
            document.getElementById("saveBook").style.display='inline';
    }
}

function loadHead(bookIndex) {
    //console.log('loadHead');
    formHead.title.value = dataBooks.listBooks[bookIndex].title;
    formHead.author.value = dataBooks.listBooks[bookIndex].author;
    formHead.genre.value = dataBooks.listBooks[bookIndex].genre;
    formHead.year.value = dataBooks.listBooks[bookIndex].year;
    currentIndex.value=bookIndex;
    currentStatus('edit');
}

function deleteBook(bookIndex) { 
    currentIndex.value=bookIndex;
    delBook.click();
}

formHead.addEventListener("submit", (e)=>{
    e.preventDefault();
    //console.log(e.submitter.value);
    let bookItems = {
        title:formHead.title.value,
        author:formHead.author.value,
        genre:formHead.genre.value,
        year:formHead.year.value,
    };
    bookIndex=formHead.currentIndex.value;

    switch (e.submitter.value ) {
        case 'addBook':
            if (!isObjEmpty(bookItems)) {
                dataBooks.add(bookItems);
                formHead.reset();
                render();
            } else {
                alert('Помилка! Всі поля без значень.')
            }
            break;
        case 'saveBook':
            dataBooks.update(bookIndex,bookItems);
            currentStatus('add');
            formHead.reset();
            render();
            break;
        case 'delBook':
            dataBooks.remove(bookIndex);
            render();
            break;    
        case 'cancelBook':
            currentStatus('add');
            formHead.reset();
            break;
    }
})


render();
