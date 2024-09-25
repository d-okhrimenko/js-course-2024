let grades;
const gradesCount = 10;

document.querySelector("#btn-regenerate").onclick = function() {
    startDemo();

}

function startDemo() {
    grades = generateRandomArray();
    updateControls();


}

function updateControls() {
    document.querySelector("#grades").innerHTML = `Grades: ${grades.join(', ')}`;
    document.querySelector("#average").innerHTML = getAvereage(grades);
    document.querySelector("#min").innerHTML = getMinValue(grades);
    document.querySelector("#max").innerHTML = getMaxValue(grades);

}

function getAvereage(values) {
    const sum = values.reduce((total, value) => total + value, 0);
    return sum / values.length;
}

function getMinValue(values) {
    let minValue = values[0];
    values.forEach((value, i) => {
        if (i > 0 && value < minValue) {
            minValue = value;
        }
    });
    return minValue;
};

function getMaxValue(values) {
    let maxValue = 0;
    values.forEach((value, i) => {
        if (value > maxValue) {
            maxValue = value;
        }
    });
    return maxValue;
};

function generateRandomArray() {
    const randomNumbers = [];
    for (let i = 0; i < gradesCount; i++) {
        const randomNumber = Math.floor(Math.random() * 101);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}