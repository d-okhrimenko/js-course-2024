document.querySelector("#bmi").addEventListener("click", showBMI);

let calculateBmi = (weight, height) => {
    weight = getNumValue("#weight");
    height = getNumValue("#height");
    return (weight / Math.pow((height / 100), 2)).toFixed(2);
}

let defineCategoryBMI = bmi => {
    bmi = calculateBmi();

    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "overweight";
    } else if (bmi >= 30) {
        return "obese";
    }
}

function showBMI() {
    let bmi = defineCategoryBMI();

    if (bmi == "underweight") {
        return showResult(`It is underweight.<br>Consult your doctor, increase your caloric intake, and incorporate strength training to build muscle.`, `#bmiOutput`);
    } else if (bmi == "normal") {
        return showResult(`It is normal.<br>Maintain a balanced diet and regular physical activity to stay healthy.`, `#bmiOutput`);
    } else if (bmi == "overweight") {
        return showResult(`It is overweight.<br>Reduce your calorie intake and increase physical activity to control your weight.`, `#bmiOutput`);
    } else if (bmi == "obese") {
        return showResult(`It is obese.<br>See a doctor, adjust your diet, and engage in regular physical activity to lose weight.`, `#bmiOutput`);
    } else {
        return showResult(`Please enter a valid number`, `#bmiOutput`);
    }
}
