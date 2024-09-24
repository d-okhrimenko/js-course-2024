function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

function getNumericPositiveValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null && value >0;
        if (isValid) return Number(value);
    }
}

function getNumericRangeValue(message, min, max) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null && value >=min && value <=max;
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
function getChoice(message) {
            while (true) {
                let value = Number(prompt(message));
                let isValid = !isNaN(value) && value == 1 || value == 2 || value == 3
		if (isValid) 
		return value;
            }
        }