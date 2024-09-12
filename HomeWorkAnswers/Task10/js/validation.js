let form = document.forms[0];

form.bookName.addEventListener("input", function () {
    let bookExist = Library.findBookByName(form.bookName.value);

    if (bookExist !== undefined) {
        form.bookName.setCustomValidity("Така книга вже існує.");
    }
    else {
        form.bookName.setCustomValidity(""); 
    }
});