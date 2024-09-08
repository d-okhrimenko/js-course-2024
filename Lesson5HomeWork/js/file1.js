function calculateBMI(height, weight) {
    let bmi = weight / (height * height);
    return bmi;
}

function determineBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Свідчить про недостатню вагу";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Еквівалент нормальної маси тіла";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Вказує на наявність зайвої ваги";
    } else {
        return "Є ознакою ожиріння";
    }
}

let weight;
let height;
let bmi;
function calculate(height, weight) {
    weight = parseFloat(prompt("Введіть вашу вагу (в кілограмах):"));
    height = parseFloat(prompt("Введіть ваш ріст (в метрах):"));

    let bmi = calculateBMI(height, weight);
    let category = determineBMICategory(bmi);

    alert(`Ваш BMI: ${bmi.toFixed(2)}\nКатегорія: ${category}`);

    document.querySelector("#bmi").innerHTML = bmi.toFixed(2);

    document.querySelector("#category").innerHTML = category;
}

document.querySelector(".btn").addEventListener("click", () => {
    calculate();
});
