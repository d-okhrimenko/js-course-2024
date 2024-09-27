const form = document.forms[0];

let elements = document.querySelectorAll("[data-val='true']");

elements.forEach(element => {
    element.addEventListener("change", onChangeHandler);
});

//form.addEventListener("submit", onSubmitHandler);
//author = 

function onChangeHandler(e) {
    const element = e.target;
    if (element.tagName == "INPUT") {
        validateElement(element);
    }
}

// function onSubmitHandler(e) {
//     for (let i = 0; i < form.elements.length; i++) {
//         const element = form.elements[i];
//         let valid = validateElement(element);
//         if (!valid) {
//             e.preventDefault();
//         }
//     }
// }

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
    console.log("#" + element.dataset.errorLabel);
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
        errorLabel.style.display = "inline-block";
        return false;
    }
};

validators.required = {
    isValid: function (element) {
        let message = element.dataset.required;
        return validators.validate(element, message, () => element.value.length > 0);
    }
};

validators.pattern = {
    isValid: function (element) {
        let message = "Введене значення не відповідає шаблону";
        let regex = new RegExp(element.dataset.pattern); // data-pattern
        return validators.validate(element, message, () => regex.test(element.value));
    }
};

validators.double = {
    isValid: function (element) {
          let message = element.dataset.double;
          return validators.validate(element, message, () => !findBook(element.value));
    }
};

validators.range = {
    isValid: function (element) {
          let message = element.dataset.range;
          let currentYear = new Date();
          console.log(currentYear.getFullYear());
          return validators.validate(element, message, () => element.value >= 1450 && element.value <= currentYear.getFullYear() ? true : false);
    }
};
