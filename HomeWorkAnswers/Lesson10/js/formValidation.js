import { library } from "./model.js"

export const validate = {
    emptyField(element, errorElementSelector) {
        let errorElement = document.querySelector(errorElementSelector);

        element.classList.remove("valid", "invalid");
        errorElement.style.display = "none";

        if (element.value.trim().length > 0) {
            element.classList.add("valid");
        } else {
            element.classList.add("invalid");
            errorElement.textContent = "field cannot be empty";
            errorElement.style.display = "flex";
        }
    },

    dublicate(element, errorElementSelector) {
        const errorElement = document.querySelector(errorElementSelector);

        const bookTitle = element.value.trim();

        if (!bookTitle) return;

        element.classList.remove("valid", "invalid");
        errorElement.style.display = "none";

        if (library.isDuplicate(bookTitle)) {
            errorElement.textContent = "Book by the title already exists";
            element.classList.add("invalid");
            errorElement.style.display = "flex";
        } else {
            element.classList.add("valid");
        }
    },

    year(element, errorElementSelector) {
        let errorElement = document.querySelector(errorElementSelector);

        element.classList.remove("valid", "invalid");
        errorElement.style.display = "none";

        const yearValue = element.value.trim();
        const currentYear = new Date().getFullYear();

        if (isNaN(yearValue)) {
            errorElement.textContent = "The year must be a number";
            element.classList.add("invalid");
            errorElement.style.display = "flex";
            return;
        }
        const year = Number(yearValue);

        if (year < 1450 || year > currentYear) {
            errorElement.textContent = `The year must be between 1450 and ${currentYear}`;
            element.classList.add("invalid");
            errorElement.style.display = "flex";
            return;
        }
        element.classList.add("valid");
    }
}
