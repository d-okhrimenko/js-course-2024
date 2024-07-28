"use strict";
document.querySelector("#data").innerHTML  = new Date();
document.querySelector("#btn").onclick = function(){
    let output = document.querySelector("#output");
    output.innerHTML  = "Привіт, Анастасія!";
}
