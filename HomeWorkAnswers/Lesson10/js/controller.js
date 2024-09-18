let html = document.querySelector("#bookList");
let template = document.querySelector("#templateBook").innerHTML;
// const formHead = document.querySelector("#formHead");
const formHead = document.forms[0];
const currentIndex = document.getElementById("currentIndex");
const delBook = document.getElementById("delBook");
const currentYear = new Date().getFullYear();
formHead.year.max = currentYear;
currentStatus('add');

function render() {
    renderBooks.renderWithTemplate(dataBooks.listBooks, html, template);
}

function isObjEmpty(obj) {
    let a = 0
    let b = 0
    for (const val of Object.values(obj)) {
        if (val) {
            a += 1;
        }
    }

    if (a == b) {
        return true;
    } else {
        return false;
    }
}

function currentStatus(status) {
    switch (status) {
        case 'add':
            document.getElementById("addBook").style.display = 'inline';
            document.getElementById("saveBook").style.display = 'none';
            formHead.title.setCustomValidity("Необхідно заповнити назву");
            formHead.author.setCustomValidity("Необхідно заповнити автора");
            formHead.genre.setCustomValidity("Необхідно заповнити жанр");
            formHead.year.setCustomValidity("Необхідно заповнити рік");
            break;
        case 'edit':
            document.getElementById("addBook").style.display = 'none';
            document.getElementById("saveBook").style.display = 'inline';
        case 'delete':  
            formHead.title.setCustomValidity("");
            formHead.author.setCustomValidity("");
            formHead.genre.setCustomValidity("");
            formHead.year.setCustomValidity("");
    }
}

function loadHead(bookIndex) {
    //console.log('loadHead');
    formHead.title.value = dataBooks.listBooks[bookIndex].title;
    formHead.author.value = dataBooks.listBooks[bookIndex].author;
    formHead.genre.value = dataBooks.listBooks[bookIndex].genre;
    formHead.year.value = dataBooks.listBooks[bookIndex].year;
    currentIndex.value = bookIndex;
    currentStatus('edit');
}

function deleteBook(bookIndex) {
    currentStatus("delete");
    currentIndex.value = bookIndex;
    delBook.click();
}


function validElement(element) {
    switch (element.id) {
        case 'title':
            if (!element.value) {
                element.setCustomValidity("Необхідно заповнити назву книги");
            } else if (dataBooks.findname(element.value))  {
                element.setCustomValidity("Така назва вже існує!");
            } else {
                element.setCustomValidity("");
            }
            break;
        case 'author':
            if (!element.value) {
                element.setCustomValidity("Необхідно заповнити автора книги");
            } else {
                element.setCustomValidity("");
            }
            break;
        case 'genre':
            if (!element.value) {
                element.setCustomValidity("Необхідно заповнити жанр книги");
            } else {
                element.setCustomValidity("");
            }
            break;
        case 'year':
            if (!element.value) {
                element.setCustomValidity("Необхідно заповнити рік книги");
            } else {
                element.setCustomValidity("");
            }
            break;
    }
}

formHead.title.addEventListener("input", function () {
    validElement(formHead.title);
})

formHead.author.addEventListener("input", function () {
    validElement(formHead.author);
})

formHead.genre.addEventListener("input", function () {
    validElement(formHead.genre);
})

formHead.year.addEventListener("input", function () {
    validElement(formHead.year);
})

function cancelBook() {
    currentStatus('add');
    formHead.reset();
}

formHead.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(e.submitter.value);
    let bookItems = {
        title: formHead.title.value,
        author: formHead.author.value,
        genre: formHead.genre.value,
        year: formHead.year.value,
    };
    bookIndex = formHead.currentIndex.value;



    switch (e.submitter.value) {
        case 'addBook':
            dataBooks.add(bookItems);
            currentStatus('add');
            formHead.reset();
            render();
            break;
        case 'saveBook':
            dataBooks.update(bookIndex, bookItems);
            currentStatus('add');
            formHead.reset();
            render();
            break;
        case 'delBook':
            dataBooks.remove(bookIndex);
            currentStatus('add');
            formHead.reset();
            render();
            break;
    }
})

render();
