let determineBodyWeight = (bodyWeight, height) => {
    return bodyWeight / Math.pow(height/100, 2);
}

function determineKategory() {
    if (indexBW < 18.5) {
        return "Ваша вага недостатня";
    }
    else if (indexBW >= 18.5 && indexBW <= 24.9) {
        return "У вас нормальна вага";
    }
    else if (indexBW >= 25 && indexBW <= 29.9) {
        return "У вас надмірна вага";
    }
    else {
        return "У вас ожиріння";
    }
}

const bodyWeight = getNumericValue("Введіть свою вагу у кілограмах");
const height = getNumericValue("Введіть свій зріст у сантиметрах");
let indexBW = determineBodyWeight(bodyWeight, height).toFixed(1);
let kategory = determineKategory();

alert(`Ваш індекс маси тіла - ${indexBW} \n${kategory}`);