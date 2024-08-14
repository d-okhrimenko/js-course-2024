let getCircleArea = radius => (Math.PI * Math.pow(radius, 2)).toFixed(2);
let getCirclePerimeter = radius => (2 * Math.PI * radius).toFixed(2);

let getRectangleArea = (length, width) => (length * width).toFixed(2);
let getRectanglePerimeter = (length, width) => (2 * (length + width)).toFixed(2);

let getTriangleArea = (a, b, c) => {
	let p = (a + b + c) / 2;
	return (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
}
let getTrianglePerimeter = (a, b, c) => (a + b + c).toFixed(2);
let figureType = 0;

do {
	figureType = getNumericValue('Введіть тип фігури: 1 (коло), 2 (прямокутник) або 3 (трикутник)');
} while (
    figureType !== 1 &&
	figureType !== 2 &&
	figureType !== 3
)

const getAreaPerimeter = figureType => {
	switch (figureType) {
		case 1:
			const radius = getNumericValue('Введіть радіус');
			const circleArea = getCircleArea(radius)
			const circlePerimeter = getCirclePerimeter(radius)
			return `Площа кола: ${circleArea}, периметр кола: ${circlePerimeter}`;
		case 2:
			const length = getNumericValue('Введіть довжину прямокутника');
			const width = getNumericValue('Введіть ширину прямокутника');
			const rectangleArea = getRectangleArea(length, width)
			const rectanglePerimeter = getRectanglePerimeter(length, width)
			return `Площа прямокутника: ${rectangleArea}, периметр прямокутника: ${rectanglePerimeter}`;
		case 3:
			const a = getNumericValue('Введіть першу сторону трикутника');
			const b = getNumericValue('Введіть другу сторону трикутника');
			const c = getNumericValue('Введіть третю сторону трикутника');
			const triangleArea = getTriangleArea(a, b, c)
			const trianglePerimeter = getTrianglePerimeter(a, b, c)
			return `Площа трикутника: ${triangleArea}, периметр трикутника: ${trianglePerimeter}`;
	}
}

let areaPerimeter = getAreaPerimeter(figureType);

alert(areaPerimeter);