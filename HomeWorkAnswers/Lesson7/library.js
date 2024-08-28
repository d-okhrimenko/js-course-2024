const showResult = (result, selector) => document.querySelector(selector).innerHTML = result;

const getNumValue = selector => {
    let value = document.querySelector(selector).value.trim();
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if (isValid) return Number(value);
    return null;
}

const getStrValue = selector => {
    let value = document.querySelector(selector).value.trim();
    let isValid = isNaN(value) && value !== "" && value !== null;
    if (isValid) return value;
    return null;
}

const clearInput = (selector) => document.querySelector(selector).value = "";
