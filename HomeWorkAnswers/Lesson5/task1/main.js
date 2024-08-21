let getImt = (weight, height) => Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;

let getCategory = imt => {
    switch (true) {
        case imt < 18.5: 
            return "Недостатня вага";
        case (18.5 <= imt) && (imt <= 24.9): 
            return "Нормальна вага";
        case (25 <= imt) && (imt <= 29.9): 
            return "Надмірна вага";
        case imt >= 30: 
            return "Ожиріння";
    }
};

let getWeight = () => Number(document.querySelector("#weight").value);
let getHeight = () => Number(document.querySelector("#height").value);

function showResult(result) {
    let imt = document.querySelector("#imt");
    imt.innerText = result;
};

document.querySelector("#btn").onclick = function() {
    let imt = getImt(getWeight(), getHeight());
    let category = getCategory(imt);

    showResult(imt + " = " + category);
}