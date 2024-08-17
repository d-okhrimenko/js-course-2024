function askParameters() {
    let weigth = askWeight();
    let height = askHeight();
    let index = calcIndex(weigth, height);
    alert(`Weight: ${weigth}, Height: ${height}, Index: ${index} (${getIndexCategory(index)})`);
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
    if (weigth === 1 || height === 1) {
        return -1;
    }

    let sHeight = height/100;
    return weigth / (sHeight*sHeight);
}

function getIndexCategory(index) {
    let categoryDescription = "incorrect data";
    
    if (index > 0 && index < 18.5) {
        categoryDescription = "Underweight";
    }
    else if (index >= 18.5 && index < 24.9) {
        categoryDescription = "Normal weight";
    } else if (index >= 25 && index < 29.9) {
        categoryDescription = "Overweight";
    } else if (index >= 30) {
        categoryDescription = "Obesity";
    }

    return categoryDescription;
}
