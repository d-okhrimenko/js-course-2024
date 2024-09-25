let form = document.querySelector("#bookForm");

// назва книги не повинна бути порожньою і не повинна повторюватися у каталозі книг
form.bookTitle.addEventListener("input", function() {
    let modeEdit = booksList.modeEdit;    
    let fieldBookTitleValue = form.bookTitle.value.trim();   
    let inBooksList = booksList.findBookByName(fieldBookTitleValue); 
    
    if (!modeEdit) {
        console.log("у режимі додавання");
        if (fieldBookTitleValue === "") {
            cssValidateElement(form.bookTitle, "invalid", "valid");
            form.bookTitle.setCustomValidity("Вкажіть назву книги."); 
        } else if (inBooksList) {
            cssValidateElement(form.bookTitle, "invalid", "valid");
            form.bookTitle.setCustomValidity("Книга з такою назвою вже існує.");
        } else {
            cssValidateElement(form.bookTitle, "valid", "invalid");
            form.bookTitle.setCustomValidity("");           
        }
    } else {
        console.log("у режимі редагування");
        if (fieldBookTitleValue === "") {
            cssValidateElement(form.bookTitle, "invalid", "valid");
            form.bookTitle.setCustomValidity("Вкажіть назву книги."); 
        } else {
            cssValidateElement(form.bookTitle, "valid", "invalid");
            form.bookTitle.setCustomValidity("");
        }
    }
});

// поле імені автора книги не повинно бути порожнім
form.bookAuthor.addEventListener("input", function () {
    let fieldBookAuthorValue = form.bookAuthor.value.trim();
    if (fieldBookAuthorValue === "") {
        cssValidateElement(form.bookAuthor, "invalid", "valid");
        form.bookAuthor.setCustomValidity("Вкажіть автора книги."); 
    } else {
        cssValidateElement(form.bookAuthor, "valid", "invalid");
        form.bookAuthor.setCustomValidity("");
    }
});

// рік видання має бути числом в межах від 1450 до значення поточного року включно
form.bookYear.addEventListener("input", function () {
    const userInputYear = document.querySelector(".form-book-year").value;
    const minBookYear = 1450;
    form.bookYear.setAttribute("min", minBookYear);
    const currentYear = new Date().getFullYear();
    const maxBookYear = currentYear;
    form.bookYear.setAttribute("max", maxBookYear);
    if (userInputYear < minBookYear || userInputYear > maxBookYear) {
        cssValidateElement(form.bookYear, "invalid", "valid");
    } else {
        cssValidateElement(form.bookYear, "valid", "invalid");
    }
});

// поле жанру книги не повинно бути порожнім
form.bookGenre.addEventListener("input", function () {
    let fieldBookGenreValue = form.bookGenre.value.trim();
    if (fieldBookGenreValue === "") {
        cssValidateElement(form.bookGenre, "invalid", "valid");
        form.bookGenre.setCustomValidity("Вкажіть жанр книги."); 
    } else {
        cssValidateElement(form.bookGenre, "valid", "invalid");
        form.bookGenre.setCustomValidity("");
    }
});

// підсвічування контурів полів введення форми
function cssValidateElement(element, addClass, removeClass) {
    element.classList.add(addClass);
    element.classList.remove(removeClass);
}
