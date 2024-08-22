let mass;
let height;
function getInfo() {
    mass = parseInt(document.getElementById("mass").value)
    height = parseInt(document.getElementById("stature").value)

    while (isNaN(mass) || isNaN(height)) {
        mass = parseInt(prompt("Введіть масу (числом):"))
        height = parseInt(prompt("Введіть ріст (числом):"))
    }

    height/=100  
}


function checkIMD() {
    getInfo()
    let currentIMD = mass / Math.pow(height, 2)
    currentIMD = +currentIMD.toFixed(2)
    let kind_OF_IMD;

    if (currentIMD <= 10) {
        kind_OF_IMD = "Пір'їнка"
    } else if (currentIMD < 18.5) {
        kind_OF_IMD = "Недостатня вага"
    } else if (currentIMD < 24.9) {
        kind_OF_IMD = "Нормальна вага"
    } else if (currentIMD < 29.9) {
        kind_OF_IMD = "Надмірна вага"
    } else {
        kind_OF_IMD = "Ожиріння"
    }

    showIMD(currentIMD, kind_OF_IMD)
}

function showIMD(currentIMD, kind_OF_IMD) {
    document.getElementById("output").textContent = `Ваш ІМТ дорівнює ${currentIMD}. Тип ІМТ: "${kind_OF_IMD}"`
}