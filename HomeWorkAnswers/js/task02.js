let shapes = {
    1: handleCircle,
    2: handleRectangle,
    3: handleTriangle,
};

function countMeasures() {
    while (true) {
        let shape = getNumericValue(
            "Виберіть фігуру: 1 - коло, 2 - прямокутник, 3 - трикутник"
        );
        if(shape <=3 && shape >=1) {
            shapes[shape]();
            break;
        }
    }
}

function showInfo(message) {
    alert(message);
}

function handleCircle() {
    let radius = getNumericValue("Введіть радіус кола");
    let area = (Math.PI * radius ** 2).toFixed(2);
    let perimeter = (2 * Math.PI * radius).toFixed(2);
    showInfo(
        `Коло з радіусом ${radius} має периметр (довжину кола) ${perimeter} та площу ${area} `
    );
}

function handleRectangle() {
    let lenRectangle = getNumericValue("Введіть довжину прямокутника");
    let widthRectangle = getNumericValue("Введіть ширину прямокутника");
    let area = lenRectangle * widthRectangle;
    let perimeter = (lenRectangle + widthRectangle) * 2;
    showInfo(
        `Прямокутник з довжиною ${lenRectangle} та шириною ${widthRectangle} має периметр ${perimeter} та площу ${area} `
    );
}

function handleTriangle() {
    let side1 = getNumericValue("Введіть довжину першої сторони трикутника");
    let side2 = getNumericValue("Введіть довжину другої сторони трикутника");
    let side3 = getNumericValue("Введіть довжину третьої сторони трикутника");
    let perimeter = side1 + side2 + side3;
    let p = perimeter / 2;
    let area = (Math.sqrt(p * (p - side1) * (p - side2) * (p - side3))).toFixed(2);
    if(isNaN(area)){
        showInfo('Такого трикутника не існує');
    } else {

        showInfo(
            `Трикутник з сторонами ${side1}, ${side2}, ${side3} має периметр ${perimeter} та площу ${area}`
        );
    }
}
