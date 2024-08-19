let ratings = [];

function avg(array) {
	const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	return sum / array.length;
}

function max(array) {
	return Math.max(...array);
}

function min(array) {
	return Math.min(...array);
}

const rating1 = getNumericValueIsIntegerFromValue1ToValue2("Введіть першу оцінку", 0, 100);
ratings.push(rating1);

const rating2 = getNumericValueIsIntegerFromValue1ToValue2("Введіть другу оцінку", 0, 100);
ratings.push(rating2);

const rating3 = getNumericValueIsIntegerFromValue1ToValue2("Введіть третю оцінку", 0, 100);
ratings.push(rating3);

const avgRating = avg(ratings);
const maxRating = max(ratings);
const minRating = min(ratings);

alert(`Середнє значення: ${avgRating}, найвища оцінка: ${maxRating}, найнижча оцінка: ${minRating}`);