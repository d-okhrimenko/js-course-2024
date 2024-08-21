
const calculateImt = (weight, height) => weight / (height * height);


function getImtCategory (imt) {
    if (imt < 18.5) {
        return 'Insufficient weight';
    } else if (imt >= 18.5 && imt < 24.9) {
        return 'Normal weight';
    } else if (imt >= 25 && imt < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

function getValidInput(promptMessage) {
    let value;
    do {
        value = +prompt(promptMessage);
    } while (isNaN(value) || value <= 0);
    return value;
}

let weight = getValidInput('Enter your WEIGHT:');
let height = getValidInput('Enter your HEIGHT:');

let imt = calculateImt(weight, height);
let category = getImtCategory(imt);

alert(`Your IMT is - ${imt}, your category is - ${category}`);

