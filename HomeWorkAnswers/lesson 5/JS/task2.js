let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
let getCirclePerimeter = (radius) => 2 * Math.PI * radius;

let getRectangleArea = (length, width) => length * width;
let getRectanglePerimeter = (length, width) => 2 * (length + width);

let getTriangleArea = (fstSide, sndSide, thdSide) => {
  let p = (fstSide + sndSide + thdSide) / 2;
  return Math.sqrt(p * (p - fstSide) * (p - sndSide) * (p + thdSide));
};
let getTrianglePerimeter = (fstSide, sndSide, thdSide) =>
  fstSide + sndSide + thdSide;

const figures = ["коло", "прямокутник", "трикутник"];
const figuresParams = [
    ["радіус"],
    ["довжина", "ширина"],
    ["1-й бік", "2-й бік", "3-й бік"]
];

let getFiguresString = () => {
  let str = "";

  for (let i = 0; i < figures.length; i++) {
    str += "'" + figures[i].charAt(0).toUpperCase() + figures[i].slice(1) + "'";
    if (i < figures.length - 1) str += ",";
    else str += "?";
  }

  return str;
};

let isProperFigure = (figure) => figures.includes(figure);

console.log(getFiguresString());

let figure = getEnteredValue(`Оберіть фігуру: ${getFiguresString()}`, true);
console.log(figure);
console.log(figures.includes(figure));
if (isProperFigure(figure)) {
    let param, temp = 0;
    let figureIndex = figures.indexOf(figure);
    switch (figureIndex) {
        case 0: // коло
            temp = 0;
            console.log(temp);
            param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][temp++]}`, true);
            console.log(param);

            // let figureParams = new Array();
            // for (let i = 0; i < figureIndex + 1; i++) {
            //     let param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][i]}`, true);
            //     figureParams.push(param);
            // }
            // for (i = 0; i < figureIndex + 1; i++)
            //     console.log(figureParams[i]);
            break;
        case 1:
            console.log(temp);
            param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][temp++]}`, true);
            console.log(param);
            console.log(temp);
            param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][temp++]}`, true);
            console.log(param);

            break;
        case 2:
            console.log(temp);
            param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][temp++]}`, true);
            console.log(param);
            console.log(temp);
            param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][temp++]}`, true);
            console.log(param);
            console.log(temp);
            param = getEnteredValue(`Введіть ${figures[figureIndex]} : ${figuresParams[figureIndex][temp++]}`, true);
            console.log(param);
            break;
    }
}
// const radius = getNumericValue("Введіть радіус:");
// let circleArea = getCircleArea(radius);
// let circlePerimeter = getCirclePerimeter(radius);

// console.log(circleArea);
// console.log(circlePerimeter);
