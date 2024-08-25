let rating = [];
const ask = prompt("Ви бажаєте заповнити масив");
if (ask == "так") {
    fillArrayByUser();
} else {
    fillArrayByComputer();
}

function fillArrayByUser() {
    const value = getNumberRatingUser();
    for (let i = 0; i < value; i++) {
        const number = getRatingUser(i);
        rating.push(number);
    }
}
function fillArrayByComputer() {
    const value = randomInteger(1, 20);
    for (let i = 0; i < value; i++) {
        const number = randomInteger(0, 100);
        rating.push(number);
    }
}

function getNumberRatingUser() {
    while (true) {
        const value = getNumericValue('Введіть кількисть оцінок');
        const isValidValue = value > 0 && Number.isInteger(value);
        if (isValidValue) return value;
    }
}
function getRatingUser(i) {
    while (true) {
        const number = getNumericValue(`Введіть оцінку ${i + 1}. \n Оцінки маюуть бути представлені як цілі числа від 0 до 100`);
        const isValidNumber = number >= 0 && number <= 100 && Number.isInteger(number);
        if (isValidNumber) return number;
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function averageRating (array) {
    let sum = 0;
    for (const value of array) {
        sum += value;
    }
    return sum / array.length;
}
function maxRating(array) {
    return Math.max(...array);
}
function minRating(array) {
    return Math.min(...array);
}

alert('Середній бал ' + averageRating(rating).toFixed(1));
alert('Найвища оцінка ' + maxRating(rating)) ;
alert('Найнижча оцінка ' + minRating(rating));

