document.querySelector("#btn").onclick = function () {

    let temp = Number(document.querySelector("#temp").value);
    let output = document.querySelector("#output");

    if ((temp % 4) == 0) {
        output.innerHTML = "Це високосний рік";
    }
    else {
        output.innerHTML = "Це невисокосний рік";
    }

}