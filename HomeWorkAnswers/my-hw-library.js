function getNumericValueGreatedZero(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid && Number(value) > 0) return Number(value);
    }
}

function getStringValue(message) {
    return prompt(message);
}