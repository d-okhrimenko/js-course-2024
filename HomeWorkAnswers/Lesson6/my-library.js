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

function getStringValue(message, options){ 
    let valueUser;
    let isValidUserInput = null;
    while (!isValidUserInput) {
        valueUser = prompt(message);
        if (valueUser !== null) {
            valueUser = valueUser.toLowerCase().trim();
        }
        isValidUserInput = options.includes(valueUser);
    }
    return valueUser;
}
