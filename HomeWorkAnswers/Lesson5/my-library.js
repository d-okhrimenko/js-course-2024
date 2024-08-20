function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) {
            value = Number(value);
            if (value > 0) return value;
        }
    }
}
