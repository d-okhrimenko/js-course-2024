document.querySelector("#btn").onclick = function () {

    let input = document.querySelector("#input").value;
    let outMessage = "Введене некоректне значення";

    if(input.trim()){input = Number(input)};

    if (Number.isInteger(input)) {
        if (input % 2 == 0) { outMessage = "Це парне число" }
        else { outMessage = "Це непарне число" }
    }

    let output = document.querySelector("#output");
    output.innerHTML = outMessage;

}