console.log("index_2.html")

function getCorrectNumber(figure) {
  let input;
  while(true) {
    input = prompt(`Введіть данні для ${figure}:`);
    if(isValidNumber(input)) {
      input = Number(input)
      break;
    } else {
      alert(`Введіть коректний данні для ${figure}!`)
    }
  }
  return input;
}

let isValidNumberPlus = (input) => input >= 0 && input <= 3;
let getAreaCircle = (radius) => Math.PI * Math.pow(radius, 2);
let getPerimeterCircle = (radius) => 2 * Math.PI * radius;
let getAreaRectangle= (length, width) => length * width;
let getPerimeterRectangle = (length, width) => 2 * (length + width);
let getAreaTriangle = (a, b, c) => {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
let getPerimeterTriangle = (a, b, c) => a + b + c;
let isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

let textMessages = document.querySelector("#textMessages");
let radius;
let circleArea;
let circlePerimeter;
let length;
let width;
let rectangleArea;
let rectanglePerimeter;
let side1Triangle;
let side2Triangle;
let side3Triangle;
let triangleArea;
let trianglePerimeter;

while(true) {
  let choosingFigure = prompt("Виберіть фігуру, периметр та площу якої будемо обчислювати: 1 - коло, 2 - прямокутник, 3 - трикутник, 0 - EXIT")
  if(isValidNumber(choosingFigure) && isValidNumberPlus(choosingFigure)) {
    choosingFigure = Math.floor(Number(choosingFigure))
    switch(choosingFigure) {
      case 0:
        textMessages.textContent = `Ви ввели ${choosingFigure}. Вихід з програми.`;
        break;
      case 1:
        alert("Введіть радіус кола:")
        radius = getCorrectNumber("кола");
        circleArea = getAreaCircle(radius).toFixed(2);
        circlePerimeter = getPerimeterCircle(radius).toFixed(2);
        textMessages.innerHTML = `Коло з радіусом ${radius} має:<br>Площу: ${circleArea}<br>Довжину: ${circlePerimeter}`;
        break;
      case 2:
        alert("Введіть довжину та ширину прямокутника:")
        length = getCorrectNumber("прямокутника");
        width = getCorrectNumber("прямокутника");
        rectangleArea = getAreaRectangle(length, width);
        rectanglePerimeter = getPerimeterRectangle(length, width);
        textMessages.innerHTML = `Прямокутник з довжиною ${length} та шириною ${width} має:<br>Площу: ${rectangleArea}<br>Периметр: ${rectanglePerimeter}`;
        break;
      case 3:
        alert("Введіть три сторони трикутника:")
        side1Triangle = getCorrectNumber("трикутника");
        side2Triangle = getCorrectNumber("трикутника");
        side3Triangle = getCorrectNumber("трикутника");

        if(isValidTriangle(side1Triangle, side2Triangle, side3Triangle)) {
          triangleArea = getAreaTriangle(side1Triangle, side2Triangle, side3Triangle).toFixed(2);
          trianglePerimeter = getPerimeterTriangle(side1Triangle, side2Triangle, side3Triangle);
          textMessages.innerHTML = `Трикутник зі сторонами: ${side1Triangle}, ${side2Triangle} та ${side3Triangle} має:<br>Площу: ${triangleArea}<br>Периметр: ${trianglePerimeter}`;
        } else {
          textMessages.textContent = `Трикутник зі сторонами: ${side1Triangle}, ${side2Triangle} та ${side3Triangle} існувати не може !!!`
        }
        break;
    }
    break;
  } else {
    alert("Введіть коректний вибір!")
  }
}