let form = document.querySelector("#bookForm");

// назва книги не повинна бути порожньою і не повинна повторюватися у каталозі книг
form.bookTitle.addEventListener("input", function () {
    let fieldBookTitleValue = form.bookTitle.value.trim();
    if (fieldBookTitleValue === "") {
        form.bookTitle.setCustomValidity("Вкажіть назву книги."); 
    } else {
        let inBooksList = booksList.findBookByName(form.bookTitle.value.trim());
        if (inBooksList) {
            form.bookTitle.setCustomValidity("Книга з такою назвою вже існує.");
        } else {
            form.bookTitle.setCustomValidity("");
        }
    }
});

// поле імені автора книги не повинно бути порожнім
form.bookAuthor.addEventListener("input", function () {
    let fieldBookAuthorValue = form.bookAuthor.value.trim();
    if (fieldBookAuthorValue === "") {
        form.bookAuthor.setCustomValidity("Вкажіть автора книги."); 
    } else {
        form.bookAuthor.setCustomValidity("");
    }
});

// рік видання має бути числом в межах від 1450 до значення поточного року включно
form.bookYear.addEventListener("input", function () {
    const minBookYear = 1450;
    form.bookYear.setAttribute("min", minBookYear);
    const currentYear = new Date().getFullYear();
    const maxBookYear = currentYear;
    form.bookYear.setAttribute("max", maxBookYear);
});


// поле жанру книги не повинно бути порожнім
form.bookGenre.addEventListener("input", function () {
    let fieldBookGenreValue = form.bookGenre.value.trim();
    if (fieldBookGenreValue === "") {
        form.bookGenre.setCustomValidity("Вкажіть жанр книги."); 
    } else {
        form.bookGenre.setCustomValidity("");
    }
});
