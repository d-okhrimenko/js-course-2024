function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

let getIndex = (weight, height) => weight / (height * height);

let getCategoty = index =>{
    if (index < 18.5) {
        return "Недостатня вага";
    } else if (index >= 18.5 && index < 24.9){
        return "Нормальна вага";
    } else if (index >= 25 && index < 29.9){
        return "Надмірна вага";
    } else{
        return "Ожиріння";
    }
}

const userWeight = getNumericValue("Введіть вагу (в кг)");
const userHeight = getNumericValue("Введіть зріст (в см)")/100;

let userIndex = getIndex(userWeight, userHeight);
let userCategory = getCategoty(userIndex);

alert(`Ваш Індекс маси тіла (ІМТ): ${userIndex.toFixed(2)}. Категорія: ${userCategory}.`);

