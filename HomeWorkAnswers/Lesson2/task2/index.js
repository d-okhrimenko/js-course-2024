const btn = document.getElementById("currentDate");
let printDate = document.getElementById("printDate");

btn.onclick = function () {
    printDate.innerHTML = "Поточна дата: " + new Date();

}
