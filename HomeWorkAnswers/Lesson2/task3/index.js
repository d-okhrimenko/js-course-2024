const myName = "Ann";
const btn = document.getElementById("sayHello");
let printName = document.getElementById("printName");

btn.onclick = function () {
    printName.innerHTML =`Привіт, ${myName}`;
}