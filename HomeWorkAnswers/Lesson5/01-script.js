function askParameters() {
    let weigth = askWeight();
    let height = askHeight();
    let result = calcIndex(weigth, height);
    alert(`Weight: ${weigth}, Height: ${height}, Index: ${result} (${getIndexCategory(result)})`);
}

function askHeight() {
    const heightInput = prompt("Please enter your height in centimeters:");
    const height = parseFloat(heightInput);

    if (isNaN(height)) {
        return 1; 
    }

    return height; 
}

function askWeight() {
    const weigthInput = prompt("Please enter your weigth in kilograms:");
    const weigth = parseFloat(weigthInput);

    if (isNaN(weigth)) {
        return 1; 
    }

    return weigth; 
}

function calcIndex(weigth, height) {
    let sHeight = height/100;
    return weigth / (sHeight*sHeight);
}

function getIndexCategory(index) {
    let result = "incorrect value";
    if (index < 18.5) {
        result = "Underweight";
    }
    else if (index >= 18.5 && index < 24.9) {
        result = "Normal weight";
    } else if (index >= 25 && index < 29.9) {
        result = "Overweight";
    } else if (index >= 30) {
        result = "Obesity";
    }

    return result;
}
