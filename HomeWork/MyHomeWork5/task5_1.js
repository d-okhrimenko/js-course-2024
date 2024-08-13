let calculationImt = (weight, height) => weight / Math.pow(height, 2);

function definitionCategory(calculation) {
    if (calculation < 18.5) {
        return 'Недостатня вага';
    } else if (calculation >= 18.5 && calculation < 24.9) {
        return 'Нормальна вага';
    } else if (calculation >= 25 && calculation < 29.9) {
        return 'Надмірна вага';
    } else {
        return 'Ожиріння';
    }
}

const weight = getNumericValue('Введіть свою вагу в кг');
const height = getNumericValue('Введіть свій зріст в м');

let calculation = calculationImt(weight, height);

let result = definitionCategory(calculation);

alert(result);