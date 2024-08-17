function getMass() {
    return getNumericValue("Введіть вашу вагу в кілограмах");
}

function getHeight() {
    return getNumericValue("Введіть ваш зріст в метрах");
}

function getBodyMassIndex() {
    let mass = getMass();
    let height = getHeight();
    return mass / height ** 2;
}

function showInfo(message) {
    alert(message);
}

function showBodyMassIndex() {
    let bdMassIdx = getBodyMassIndex();
    if (bdMassIdx >= 30) {
        showInfo("У вас ожиріння");
    } else if (bdMassIdx >= 25 && bdMassIdx < 30) {
        showInfo("У вас надмірна вага");
    } else if (bdMassIdx < 25 && bdMassIdx >= 18.5) {
        showInfo("У вас нормальна вага");
    } else {
        showInfo("У вас недостатня вага");
    }
}
