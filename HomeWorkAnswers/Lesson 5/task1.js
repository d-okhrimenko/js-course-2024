let imt = (weight, height) => (weight / Math.pow(height / 100, 2)).toFixed(1);

const getWeightCategory = calculatedImt => {
	if (calculatedImt < 18.5) {
		return 'Недостатня вага';
	} else if (calculatedImt >= 18.5 && calculatedImt < 24.9) {
		return 'Нормальна вага';
	} else if (calculatedImt >= 25 && calculatedImt < 29.9) {
		return 'Надмірна вага';
	} else {
		return 'Ожиріння';
	}
}

const weight = getNumericValue('Введіть вагу');
const height = getNumericValue('Введіть зріст');

let calculatedImt = imt(weight, height);
let weightCategory = getWeightCategory(calculatedImt);

alert(`IMT: ${calculatedImt}, категорія: ${weightCategory}`);