let bodyWeight = +prompt("Put your body weight in kilograms");
let bodyHeight = +prompt("Put your body height in santimeters");
let result = 0;

function imt(weight, height) {
    let heightInMetres = height / 100;
    result = weight / Math.pow(heightInMetres, 2);
    return result;
}
imt(bodyWeight, bodyHeight);
console.log(result);

function imtCategory() {
    if (result < 18.5) {
        alert(`Your IMT is ${result}, it's insufficient.`)
    } else if (result >= 18.5 && result < 24.9 ) {
        alert(`Your IMT is ${result}, it's normal`)
    } else if (result >= 25 && result < 29.9) {
        alert(`Your IMT is ${result}, it's excessive`) 
    } else {
        alert(`Your IMT is ${result}, you have obesity`)
    }
}
imtCategory();