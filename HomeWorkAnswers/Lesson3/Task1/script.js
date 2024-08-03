document.querySelector("#btn").onclick = function () {
    let number = Number(document.querySelector("#date").value);
    if (number % 2 === 0) {
        document.querySelector("#result").innerHTML = "Число парне";
        alert("Число парне");
    } else {
        document.querySelector("#result").innerHTML = "Число непарне";
        alert("Число непарне");
    }
}
document.querySelector('#date').addEventListener("input",
    function () {
        this.value = this.value.replace(/[^\d.]/g, '');
    }
)
