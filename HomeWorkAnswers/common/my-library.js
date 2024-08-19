function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

function getNumericValueIsIntegerFromValue1ToValue2(message, value1, value2) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null && value % 1 === 0 && value >= value1 && value <= value2;
        if (isValid) return Number(value);
    }
}