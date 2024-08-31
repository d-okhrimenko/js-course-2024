'use strict';

const output = document.querySelector("#output");
const button = document.querySelector("#btn");

button.onclick = function() {
    output.innerHTML = new Date();
}
