
function getIMT(vaga, rist) {
    return IMT = vaga / Math.pow(rist, 2);
}

function defineCategory(IMT) {
    if (IMT < 18.5) {
        return alert("У тебе недостатня вага");
    }
    else if (IMT >= 18.5 && IMT < 24.9) {
        return alert("У тебе нормальна вага");
    }
    else if (IMT >= 25 && IMT < 29.9); {
        return alert("У тебе надмірна вага"); 
    }
    alert("У тебе ожиріння");
}

let IMT
let vaga = getNumericValue("Введіть вашу вагу в кілограмах");
let rist = getNumericValue("Введіть ваш ріст в метрах");

getIMT(vaga, rist);
alert("Index = " + IMT.toFixed(2));
defineCategory(IMT);

console.log(vaga);
console.log(rist);
console.log(IMT);