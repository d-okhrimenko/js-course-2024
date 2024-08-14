"use strict";

let figure = prompt('Виберіть фігуру коло, прямокутник чи трикутник');

alert(getResult(figure));

function getResult(figure) {
    let f;
    if (figure == 'коло') {
        let r = Number(prompt('Радіус кола'));
        f = getAreaPerimeterСircle(r);
    } else if (figure == 'прямокутник') {
        let length = Number(prompt('Довжина прямокутника'));
        let weight = Number(prompt('Ширина прямокутника'));
        f = getAreaPerimeterRectangle(length, weight);
    } else if (figure == 'трикутник') {
        let a = Number(prompt('Довжина сторони a'));
        let b = Number(prompt('Довжина сторони b'));
        let c = Number(prompt('Довжина сторони c'));
        f = getAreaPerimeterTriangle(a, b, c);
    } else {
        return "Не коректно написали назву фігури";
    }
    let { area, perimeter } = f;
    return `Площа = ${area}, Періметр = ${perimeter}`;
}

function getAreaPerimeterСircle(r) {
    let area = 3.14 * Math.pow(r, 2);
    let perimeter = (2 * 3.14 * r).toFixed(2);
    return { area, perimeter };
}

function getAreaPerimeterRectangle(length, width) {
    let area = length * width;
    let perimeter = 2 * (length + width);
    return { area, perimeter };
}

function getAreaPerimeterTriangle(a, b, c) {
    let p = (a + b + c) / 2;
    let area = (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
    let perimeter = a + b + c;
    return { area, perimeter };
}
