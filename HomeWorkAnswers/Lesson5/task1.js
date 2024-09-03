//оголошення зміних
let weight = 0;
let height = 0;
let IMT = 0;
let CategoryIMT = 0;
let count = 0;
const noValid = "Введене значення не коректне, спробуйте знову";

//функція обчислення індексу маси тіла
calculationIMT = (w, h) => w / (Math.pow(h / 100, 2));

//функція визначення категорії ІМТ
definitionCategoryIMT = (x) => {
    if (x < 18.5) {
        return "Недостатної ваги"
    }
    else if (18.5 <= x && x <= 24.9) {
        return "Нормальної ваги"
    }
    else if (25 <= x && x <= 29.9) {
        return "Надмірної ваги"
    }
    else if (30 <= x) {
        return "Ожиріння"
    }
}


//функція перевірки введеного значення
function getNumericValue(message, step) {
    let value;
    while (true) {

        //умова розділення для виведення 1-го повідомлення
        if (count >= 1) {
            value = prompt(message);
        }
        else {
            value = prompt("Доброго дня!\n" + message);
        }
        count++;

        let isValid = !isNaN(value) && value !== "" && value !== null && value > 0;
        //введене значення коректне
        if (isValid) return Number(value);
        //нажата кнопка відміна
        else if (value === null) return value = "exit";
        
        else {
            //умова розділення, якщо введено не коректне значення на кроці запису ваги/зросту
            if (step == 1)
                alert(`${noValid} ввести Вашу вагу в кілограмах`);
            else if (step == 2)
                alert(`${noValid} ввести Ваш зріст в сантиметрах`);
        }
    }
}


weight = getNumericValue("Для обчислення індексу маси тіла введіть свою вагу в кілограмах", 1);

if (weight == "exit") {
    count = 0;
    alert("Дякуємо за Ваш вибір!");
}
else {
    height = getNumericValue("Для обчислення індексу маси тіла введіть свій зріст в сантиметрах", 2);
    if (height == "exit") {
        count = 0;
        alert("Дякуємо за Ваш вибір!");
    }
    else {
        IMT = calculationIMT(weight, height);
        CategoryIMT = definitionCategoryIMT(IMT);
        alert(`Ваш індекс маси тіла = ${IMT.toFixed(1)}.\nЩо є ознакою ${CategoryIMT}`);
    }
}



console.log(IMT);
console.log(CategoryIMT);
console.log(weight);