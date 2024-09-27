"use strict"
// alert(new Date().toDateString());
var stLine="Сергій";
let output = document.querySelector("#output");
output.innerHTML = new Date().toDateString();
output.style.color = "red";
console.log(new Date());
document.querySelector("#btn").onclick = function () {
    let text = document.querySelector("#text");
    text.innerHTML = `Привіт ${stLine}`;
    text.style.color = "blue";
    output.innerHTML = "";
    output.style.color = "black";
}