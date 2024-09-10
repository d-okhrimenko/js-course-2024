// Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник, трикутник). Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.
const [figure, sizeType] = document.querySelectorAll('select');
const [nextBtn, calcBtn] = document.querySelectorAll('button');
const nextPart = document.querySelector('#next-part');
const error = document.querySelector('#error');
const result = document.querySelector('#result');

const [circle, rectangle, triangle] = document.querySelectorAll('.figure-box')
const circleRadius = document.querySelector('#circle-radius');
const rectLength = document.querySelector('#rect-length');
const rectWidth = document.querySelector('#rect-width');
const trSide1 = document.querySelector('#side1');
const trSide2 = document.querySelector('#side2');
const trSide3 = document.querySelector('#side3');

const PI = Math.PI;
let isContinue;

nextBtn.addEventListener('click', showNextPart);
calcBtn.addEventListener('click', calculate);

function showNextPart () {
    if(figure.value === "" || sizeType === "") {
        error.innerHTML = 'Оберіть потрібні значення';
    } else {
        nextPart.classList.add('next-part-flex');
        if(figure.value === 'circle') {
            circle.classList.toggle('figure-box');
        } else if (figure.value === 'rectangle') {
            rectangle.classList.toggle('figure-box');
        }  else {
            triangle.classList.toggle('figure-box');
        }
    }
    nextBtn.removeEventListener('click', showNextPart)
}

function calculate () {
    isContinue = true;
    if(figure.value === 'circle' && sizeType.value === 'area') {
        let radius = getNumericValue(circleRadius);
        if(isContinue) {
            error.innerHTML = '';
            let calcResult = calculateCircleArea(radius).toFixed(2);
            result.innerHTML = `Площа кола ${calcResult} кв.см`
        }
    } else if (figure.value === 'circle' && sizeType.value === 'perimeter') {
        let radius = getNumericValue(circleRadius);
        if (isContinue) {
            error.innerHTML = '';
            let calcResult = calculateCirclePerimeter(radius).toFixed(2);
            result.innerHTML = `Периметр кола ${calcResult} см.`
        }  
    } else if (figure.value === 'rectangle' && sizeType.value === 'area') {
        let length = getNumericValue(rectLength);
        let width = getNumericValue(rectWidth);
        if(isContinue) {
            error.innerHTML = '';
            let calcResult = calculateRectangleArea(length, width).toFixed(2);
            result.innerHTML = `Площа прямокутника ${calcResult} кв.см`
        } 
    } else if(figure.value === 'rectangle' && sizeType.value === 'perimeter') {
        let length = getNumericValue(rectLength);
        let width = getNumericValue(rectWidth);
        if (isContinue) {
            error.innerHTML = '';
            let calcResult = calculateRectanglePerimeter(length, width).toFixed(2);
            result.innerHTML = `Периметр прямокутника ${calcResult} см.`
        }
    } else if (figure.value === 'triangle' && sizeType.value === 'area') {
        let side1 = getNumericValue(trSide1);
        let side2 = getNumericValue(trSide2);
        let side3 = getNumericValue(trSide3);
        if(isContinue) {
            error.innerHTML = '';
            let calcResult = calculateTriangleArea(side1, side2, side3).toFixed(2);
            result.innerHTML = `Площа трикутника ${calcResult} кв.см`
        }
    } else {
        let side1 = getNumericValue(trSide1);
        let side2 = getNumericValue(trSide2);
        let side3 = getNumericValue(trSide3);
        if(isContinue) {
            error.innerHTML = '';
            let calcResult = calculateTrianglePerimeter(side1, side2, side3).toFixed(2);
            result.innerHTML = `Периметр трикутника ${calcResult} см.`
        }
    }  
}

function getNumericValue (userInput) {
    let isValid = !isNaN(userInput.value) && userInput.value !== "" && userInput.value !== null;
    if(isValid) {
        return Number(userInput.value);
    } else {
        isContinue = false;
        error.innerHTML = 'Виникла помилка! Введіть число більше 0';
    }
}

let calculateCircleArea = radius => PI * Math.pow(radius, 2);
let calculateCirclePerimeter = radius => 2 * PI * radius;

let calculateRectangleArea = (length, width) => length * width;
let calculateRectanglePerimeter = (length, width) => 2 * (length + width);


let calculateTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3;
let calculateTriangleArea = (side1, side2, side3) => {
    const halfOfPer = calculateTrianglePerimeter(side1, side2, side3) / 2;
    const area = Math.sqrt(halfOfPer * (halfOfPer - side1) * (halfOfPer - side2) * (halfOfPer - side3));
    return area;
}

console.log(calculateTriangleArea(10, 10, 10));

//????? округлення результату


