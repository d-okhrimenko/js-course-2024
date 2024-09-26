const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

const minYear = 1450;

let editId = null;

let elements = document.querySelectorAll("[data-val='true']");
elements.forEach(element => {
    element.addEventListener("change", onChangeHandler);
});

function onChangeHandler(e) {
    const element = e.target;
    if (element.tagName == "INPUT") {
        validateElement(element);
    }
}

bookForm.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(e) {
    e.preventDefault();

    let valid = true;
    for (let i = 0; i < bookForm.elements.length; i++) {
        const element = bookForm.elements[i];
        if (valid) {
            valid = validateElement(element);
        }
    }
    if (valid) {
        addOrEditBook(e); 
    }
}

function isBookExists(title) {
    return booksArray.books.some(book => {
        if (editId && book.id === editId) {
            return false; 
        }
        return book.title.toLowerCase() === title.toLowerCase();
    });
}

function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return year >= minYear && year <= currentYear;
}

function addOrEditBook(e) {
    e.preventDefault();
    let book = new Book(titleInput.value, authorInput.value, yearInput.value, genreInput.value);
    if (editId) {
        booksArray.edit(editId, book);
        editId = null;
    } else {
        booksArray.add(book);
    }
    titleInput.value = null;
    authorInput.value = null;
    yearInput.value = null;
    genreInput.value = null;

    displayBooks();
}

function editBook(bookID) {
    editId = bookID;
    const book = booksArray.find(bookID);
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    displayBooks();
}

function deleteBook(bookID) {
    booksArray.delete(bookID);
    displayBooks();
}

function validateElement(element) {
    for (const key in validators) {
        if (Object.hasOwnProperty.call(validators, key) && typeof validators[key] == "object") {
            if (element.dataset[key]) {
                const validator = validators[key];
                if (!validator.isValid(element))
                    return false;
            }
        }
    }
    return true;
}

let validators = {};
validators.validate = function (element, message, predicate) {
    let errorLabel = document.querySelector("#" + element.dataset.errorLabel); 
    errorLabel.textContent = message;
    errorLabel.style.display = "none";
    element.classList.remove("valid");
    element.classList.remove("invalid");

    if (typeof predicate == "function" && predicate()) {
        element.classList.add("valid");
        return true;
    }
    else {
        element.classList.add("invalid");
        errorLabel.style.display = "block";
        return false;
    }
};

validators.required = {
    isValid: function (element) {
        let message = element.dataset.required;
        return validators.validate(element, message, () => element.value.length > 0);
    }
};

validators.uniquetitle = {
    isValid: function (element) {
        let message = element.dataset.uniquetitle;
        return validators.validate(element, message, () => !isBookExists(element.value));
    }
};

validators.correctyear = {
    isValid: function (element) {
        let message = element.dataset.correctyear;
        return validators.validate(element, message, () => isValidYear(element.value));
    }
};
