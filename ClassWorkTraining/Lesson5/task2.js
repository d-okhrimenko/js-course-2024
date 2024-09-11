let getValue = () => Number(document.querySelector("#temp").value);
let toCelsius = temp => 5 / 9 * (temp - 32);
let toFarenheit = temp => 9 / 5 * temp + 32;

let convert = converter => {
    return () => {
        let temp = getValue();
        let value = converter(temp);
        showResult(value);
    }
}

document.querySelector("#btnToC").onclick = convert(toCelsius);
document.querySelector("#btnToF").onclick = convert(toFarenheit);

function showResult(result) {
    let output = document.querySelector("#output");
    output.innerHTML = result;
}
