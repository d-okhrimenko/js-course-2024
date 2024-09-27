function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = value === null || !isNaN(value) && value !== "";
        if (isValid) return Number(value);
    }
}

function getNumericValueInRange(message, min, max) {
    while (true) {
        let value = prompt(message);
        if(value === null) return value;
        else if(!isNaN(value) && value !== "" && Number(value) >= min && Number(value) <= max) return Number(value);
    }
}

function getValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = value !== "" && value !== null;
        if (isValid) return value;
    }
}