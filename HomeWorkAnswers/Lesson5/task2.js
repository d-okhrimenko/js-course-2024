document.querySelector("#circle").addEventListener("click", showCircleCalculation);

let getCircleRadius = () => getNumValue("#radius");

let getCircleArea = radius => Math.PI * Math.pow(radius, 2);

let getCirclePerimetr = radius => 2 * Math.PI * radius;

let calculateCircleArea = () => {
   let radius = getCircleRadius();
   return getCircleArea(radius).toFixed(2);
}

let calculateCirclePerimetr = () => {
   let radius = getCircleRadius();
   return getCirclePerimetr(radius).toFixed(2);
}

function showCircleCalculation() {
   let radius = getCircleRadius();

   if (radius !== null && radius > 0) {
      const area = calculateCircleArea();
      const perimetr = calculateCirclePerimetr();

      return showResult(`Circle area = ${area}<br>Circle perimetr = ${perimetr}`, "#circleOutput");
   } else {
      showResult(`Please enter a valid number`, "#circleOutput");
   }
}


document.querySelector("#rectangle").addEventListener("click", showRectCalculation);

let getRectLength = () => getNumValue("#length");

let getRectWidth = () => getNumValue("#width");

let getRectArea = (length, width) => length * width;

let getRectPerimetr = (length, width) => 2 * (length + width);

let calculateRectArea = () => {
   let length = getRectLength();
   let width = getRectWidth();

   return getRectArea(length, width);
}

let calculateRectPerimetr = () => {
   let length = getRectLength();
   let width = getRectWidth();

   return getRectPerimetr(length, width);
}

let isValidRectangle = (length, width) => length !== null && width !== null && length > 0 && width > 0;

function showRectCalculation() {
   let length = getRectLength();
   let width = getRectWidth();

   if (isValidRectangle(length, width)) {
      let area = calculateRectArea();
      let perimetr = calculateRectPerimetr();

      return showResult(`Rectangle area = ${area}<br>Rectangle perimetr = ${perimetr}`, "#rectangleOutput");
   } else {
      showResult(`Please enter a valid number`, "#rectangleOutput");
   }
}


document.querySelector("#triangle").addEventListener("click", showTriangleCalculation);

let getSideA = () => getNumValue("#sideA");
let getSideB = () => getNumValue("#sideB");
let getSideC = () => getNumValue("#sideC");

let getTriangleArea = (a, b, c) => {
   let p = getTrianglePerimetr(a, b, c) / 2;
   return Math.sqrt((p * (p - a) * (p - b) * (p - c)));
}

let getTrianglePerimetr = (a, b, c) => a + b + c;

let calculateTriangleArea = () => {
   let a = getSideA();
   let b = getSideB();
   let c = getSideC();

   return getTriangleArea(a, b, c).toFixed(2);
}

let calculateTrianglePerimetr = () => {
   let a = getSideA();
   let b = getSideB();
   let c = getSideC();

   return getTrianglePerimetr(a, b, c);
}

let isRightTriangle = (a, b, c) => (a + b > c) && (a + c > b) && (b + c > a);

let isValidTriangle = (a, b, c) => (a !== null && a > 0) && (b !== null && b > 0) && (c !== null && c > 0);

function showTriangleCalculation() {
   let a = getSideA();
   let b = getSideB();
   let c = getSideC();

   if (isValidTriangle(a, b, c)) {
      if (isRightTriangle(a, b, c)) {
         let area = calculateTriangleArea();
         let perimetr = calculateTrianglePerimetr();
         return showResult(`Triangle area = ${area}<br>Triangle perimetr = ${perimetr}`, "#triangleOutput");
      } else {
         showResult(`The sum of two sides of a triangle must always be greater than the third side.`, "#triangleOutput");
      }
   } else {
      showResult(`Please enter a valid number`, "#triangleOutput");
   }
}
