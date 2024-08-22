function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius
}

function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2)
}


function calculateRectanglePerimeter(sides) {
    let sidesList = sides.split(" ")

    let height = parseInt(sidesList[0])
    let width = parseInt(sidesList[1])
    return 2 * (height + width)
}

function calculateRectangleArea(sides) {
    let sidesList = sides.split(" ")

    let height = parseInt(sidesList[0])
    let width = parseInt(sidesList[1])
    return height * width
}


function calculateTrianglePerimeter(sides) {
    let sidesList = sides.split(" ")

    let side1 = parseInt(sidesList[0])
    let side2 = parseInt(sidesList[1])
    let side3 = parseInt(sidesList[2])

    return side1 + side2 + side3
}

function calculateTriangleArea(sides) {
    let sidesList = sides.split(" ")

    let side1 = parseInt(sidesList[0])
    let side2 = parseInt(sidesList[1])
    let side3 = parseInt(sidesList[2])


    // даю sides бо функція на вході приймає рядок
    let perimeter = calculateTrianglePerimeter(sides)

    return Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3))
}



let input = prompt("Введіть фігуру:").toLowerCase()
if (input === "коло" || input === "круг") {
    let radiusInput = prompt("Введіть радіус кола:")
    alert(`Периметр ${calculateCirclePerimeter(radiusInput)}. Площа ${calculateCircleArea(radiusInput)}.`)
} else if (input === "прямокутник") {
    let sidesInput = prompt("Введіть висоту і ширину (через пробіл, в однакових одиницях вимірювання):")
    alert(`Периметр ${calculateRectanglePerimeter(sidesInput)}. Площа ${calculateRectangleArea(sidesInput)}.`)
} else if (input === "трикутник") {
    let sidesInput = prompt("Введіть сторони трикутника (через пробіл, в однакових одиницях вимірювання):")
    alert(`Периметр ${calculateTrianglePerimeter(sidesInput)}. Площа ${calculateTriangleArea(sidesInput)}.`)
}