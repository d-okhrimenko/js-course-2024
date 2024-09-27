document.querySelector("#btn").onclick = function() {
    let curd = document.querySelector("#curd");
    curd.innerHTML = "Current date is " + new Date();
    curd.style.color = "green";
    }