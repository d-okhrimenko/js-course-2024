function calculateBmi() {
    let userWeight = parseFloat(document.getElementById("weight").value);
    let userHeight = parseFloat(document.getElementById("height").value) / 100;
    
    if (isNaN(userWeight) || isNaN(userHeight) || userWeight <= 0 || userHeight <= 0) {
        alert("Please input NUMBER!\nGreater than 0!");
        return null;
    }

    let userBmi = userWeight / (Math.pow(userHeight, 2));
    return userBmi;
}

function defineBmiCategory(userBmi) {
    let bmiCat;

    switch (true) {
        case (userBmi < 18.5):
            bmiCat = "Underweight";
            break;
        case (userBmi >= 18.5 && userBmi < 24.9):
            bmiCat = "Normal weight";
            break;
        case (userBmi >= 25 && userBmi < 29.9):
            bmiCat = "Overweight";
            break;
        case (userBmi >= 30):
            bmiCat = "Obese";
            break;
        default:
            bmiCat = "Can't define BMI";
    }

    return bmiCat;
}

function outputUserBmi() {
    let userBmi = calculateBmi();
    
    if (userBmi !== null) {
        let bmiCat = defineBmiCategory(userBmi);
        document.getElementById("bmiResult").innerText = userBmi.toFixed(1);
        document.getElementById("bmiCategory").innerText = bmiCat;
    }
}
