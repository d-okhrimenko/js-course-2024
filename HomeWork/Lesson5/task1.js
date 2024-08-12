let height = getNumericValue('Вкажіть зріст (см)');
let weight = getNumericValue('Вкажіть вагу (кг)');

function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        if (!isNaN(value) && value !== "" && value !== null) {
            return Number(value);
        } else {
            alert('Будь, ласка введіть коректне число');
        }
    }
}

function calculateIMT(height, weight) {
    return weight / Math.pow((height / 100), 2);
}

function getBodyCategory(IMT) {
    IMT = IMT.toFixed(2);

    if (IMT < 18.5) {
        return `Недостатня вага. Ваш IMT: ${IMT}`;
    } else if (18.5 <= IMT < 24.9) {
        return `Нормальна вага. Ваш IMT: ${IMT}`;
    } else if (25 <= ІМТ < 29.9) {
        return `Надмірна вага. Ваш IMT: ${IMT}`;
    } else if (ІМТ > 30) {
        return `Ожиріння. Ваш IMT: ${IMT}`;
    }
}

let IMT = calculateIMT(height, weight);
alert(getBodyCategory(IMT));