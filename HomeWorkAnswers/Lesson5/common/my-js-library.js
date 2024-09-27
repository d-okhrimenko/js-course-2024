function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
        if (!isValid) alert("Спробуйте ще раз і введіть число.");
    }
}