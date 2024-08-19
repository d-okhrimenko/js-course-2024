let weight = +prompt("Input your weight in kilograms");
let height = +prompt("Input your height in cantimeters");

let weightIndexDetector = function (weight, height) {
    height = height / 100;
    let weightIndex = weight / (height * height);
    return Math.round(weightIndex * 100) / 100;
}

function defineWightCategory(weightIndex) {

    let result = null;

    if (weightIndex < 18.5) {
        result = "insufficient eeight";
    } else if (weightIndex >= 18.5 && weightIndex <= 24.9) {
        result = "normal weight";
    }else if (weightIndex >= 25 && weightIndex <= 29.9) {
        result = "over weight";
    }else if (weightIndex >= 30) {
        result = "adiposity";
    }
    return result;
}

let weightIndex = weightIndexDetector(weight, height);

let weightCategory = defineWightCategory(weightIndex);
console.log(weightCategory);
alert(`Your weight index is ${weightIndex}, and your weight category is ${weightCategory}`);