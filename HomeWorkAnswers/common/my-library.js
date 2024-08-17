function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

function getValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = value !== "" && value !== null;
        if (isValid) return value;
    }
}