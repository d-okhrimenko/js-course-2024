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

const addArrayElement = (array, element) => {
    array.push(element);
    return element;
}

const removeArrayElementbyName = (array, element) => {
    const index = array.indexOf(element);
    if (index !== -1) return array.splice(index, 1)[0];
    return null;
}

const displayArrayValues = (array) => {
    let list = "";
    for (let value of array.values()) {
        list += value + "<br>";
    }
    return list;
}

const clearInput = (selector) => document.querySelector(selector).value = "";
