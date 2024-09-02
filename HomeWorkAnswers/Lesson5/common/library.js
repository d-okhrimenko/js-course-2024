// numeric input
function getNumericValue(message) {
    while (true) {
        let value = prompt(message).replace(',','.');
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid)
            return Number(value);
    }
}