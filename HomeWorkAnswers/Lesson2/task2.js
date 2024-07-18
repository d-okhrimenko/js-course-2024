console.log(new Date())

let data = document.querySelector("#data");
let btn = document.querySelector("#btn");

btn.onclick = function() {
    data.innerText = new Date();
}