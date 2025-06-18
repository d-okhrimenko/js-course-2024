function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

//Circle
document.querySelector("#circle").onclick = function () {
    function getCircleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    function getCirclePerimeter(radius) {
        return 2 * Math.PI * radius;
    }

    //let getCircleArea = radius => Math.PI * Math.pow(radius, 2);

    const radius = getNumericValue("Введіть радіус");
    let circlArea = getCircleArea(radius).toFixed(1);
    let circlPerimeter = getCirclePerimeter(radius).toFixed(1);
    alert(`Периметр кола дорівнює: ${circlPerimeter}, площа кола дорівнює: ${circlArea}`);
}
// console.log(circlArea);
// console.log(circlPerimeter);

//Rectangle

document.querySelector("#rectangle").onclick = function () {
    function getRectangleArea(lenght, width) {
        return (lenght * width);
    }

    function getRectanglePerimeter(lenght, width) {
        return 2 * (lenght + width);
    }


    const lenght = getNumericValue("Введіть довжину прямокутника");
    const width = getNumericValue("Введіть ширину прямокутника");
    let rectangleArea = getRectangleArea(lenght, width).toFixed(1);
    let rectanglePerimeter = getRectanglePerimeter(lenght, width).toFixed(1);
    alert(`Периметр прямокутника дорівнює: ${rectanglePerimeter}, площа приямокутника дорівнює: ${rectangleArea}`);
}
// console.log(rectangleArea);
// console.log(rectanglePerimeter);

//Triangle

document.querySelector("#triangle").onclick = function () {
    let perim;

    function getTrianglePerimeter(firstSide, secondSide, thirdSide) {
        perim = firstSide + secondSide + thirdSide;
        return perim;
    }

    function getTriangleArea(firstSide, secondSide, thirdSide) {
        let half = (perim / 2);
        return Math.sqrt(half * (half - firstSide) * (half - secondSide) * (half - thirdSide));
    }


    const firstSide = getNumericValue("Введіть довжину першої сторони трикутника");
    const secondSide = getNumericValue("Введіть довжину другої сторони трикутника");
    const thirdSide = getNumericValue("Введіть довжину третьої сторони трикутника");
    let trianglePerimeter = getTrianglePerimeter(firstSide, secondSide, thirdSide).toFixed(1);
    let triangleArea = getTriangleArea(firstSide, secondSide, thirdSide).toFixed(1);
    alert(`Периметр трикутника дорівнює: ${trianglePerimeter}, площа трикутника дорівнює: ${triangleArea}`);
}
// console.log(triangleArea);
// console.log(trianglePerimeter);