const calculateBmi = (weight, height) => {
    if (weight !== null && height !== null) {
        weight = getNumValue("#weight");
        height = getNumValue("#height");
        return (weight / Math.pow((height / 100), 2)).toFixed(2);
    } else {
        return null;
    }
}

const defineCategoryBMI = bmi => {
    bmi = calculateBmi();

    if (bmi < 18.5) {
        return `It is underweight.<br>Consult your doctor, increase your caloric intake, and incorporate strength training to build muscle.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return `It is normal.<br>Maintain a balanced diet and regular physical activity to stay healthy.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        return `It is overweight.<br>Reduce your calorie intake and increase physical activity to control your weight.`;
    } else if (bmi >= 30) {
        return `It is obese.<br>See a doctor, adjust your diet, and engage in regular physical activity to lose weight.`;
    } else {
        return "Please enter a valid number";
    }
}

document.querySelector("#bmi").addEventListener("click", showBMI);

function showBMI() {
    showResult(`Yur BMI = ${calculateBmi()}. ${defineCategoryBMI()}`, `#bmiOutput`);
}
