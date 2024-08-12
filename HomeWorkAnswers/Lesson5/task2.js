document.querySelector("#circle").addEventListener("click", calculateCircle);

let getCircleArea = radius => Math.PI * Math.pow(radius, 2);
let getCirclePerimetr = radius => 2 * Math.PI * radius;

function calculateCircle() {
   const circleRadius = getNumValue("#radius");
   if (circleRadius !== null) {
      let circleArea = getCircleArea(circleRadius).toFixed(2);
      let circlePerimetr = getCirclePerimetr(circleRadius).toFixed(2);

      return showResult(`Circle area = ${circleArea}<br>Circle perimetr = ${circlePerimetr}`, "#circleOutput");
   } else {
      showResult(`Please enter a valid number`, "#circleOutput");
   }
}


document.querySelector("#rectangle").addEventListener("click", calculateRectangle);

let getRectangleArea = (length, width) => length * width;
let getRectanglePerimetr = (length, width) => 2 * (length + width);

function calculateRectangle() {
   const rectLength = getNumValue("#length");
   const rectWidth = getNumValue("#width");

   if (rectLength !== null && rectWidth !== null) {
      let rectangleArea = getRectangleArea(rectLength, rectWidth);
      let rectanglePerimetr = getRectanglePerimetr(rectLength, rectWidth);

      return showResult(`Rectangle area = ${rectangleArea}<br>Rectangle perimetr = ${rectanglePerimetr}`, "#rectangleOutput");
   } else {
      showResult(`Please enter a valid number`, "#rectangleOutput");
   }
}


document.querySelector("#triangle").addEventListener("click", calculateTriangle);

let getTrianglePerimetr = (a, b, c) => a + b + c;

let getTriangleArea = (a, b, c) => {
   let p = getTrianglePerimetr(a, b, c) / 2;
   return Math.sqrt((p * (p - a) * (p - b) * (p - c)));
}

let isValidTriangle = (a, b, c) => {
   return (a + b > c) && (a + c > b) && (b + c > a);
}

function calculateTriangle() {
   const sideA = getNumValue("#sideA");
   const sideB = getNumValue("#sideB");
   const sideC = getNumValue("#sideC");

   if (sideA !== null && sideB !== null && sideC !== null) {
      if (isValidTriangle(sideA, sideB, sideC)) {
         let trianglePerimetr = getTrianglePerimetr(sideA, sideB, sideC);
         let triangleArea = getTriangleArea(sideA, sideB, sideC).toFixed(2);
         return showResult(`Triangle area = ${triangleArea}<br>Triangle perimetr = ${trianglePerimetr}`, "#triangleOutput");
      } else {
         showResult(`The sum of two sides of a triangle must always be greater than the third side.`, "#triangleOutput");
      }
   } else {
      showResult(`Please enter a valid number`, "#triangleOutput");
   }
}
