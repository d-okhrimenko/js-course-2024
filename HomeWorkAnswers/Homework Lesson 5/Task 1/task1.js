let userWeight;
let userHeight;
let userBmi;
let bmiCat;

function askUserParameters() {
    userWeight = parseFloat(prompt("Input your weight (in kg):"));
    userHeight = parseFloat(prompt("Input your height (in centimeters):")) / 100;
}

function calculateBmi() {
    userBmi = userWeight / (Math.pow(userHeight, 2));
    return userBmi;
}

function defineBmiCategory() {
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
}

function outputUserBmi() {
    alert(`Your BMI is: ${userBmi}\nBMI category is: ${bmiCat}`);
}

askUserParameters();
calculateBmi();
defineBmiCategory();
outputUserBmi();
