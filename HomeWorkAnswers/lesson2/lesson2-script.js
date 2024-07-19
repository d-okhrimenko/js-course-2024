let currentDate = new Date();
console.log("Поточна дата: " + currentDate);


document.querySelector("#greetButton").onclick = function () {
    const name = "Ілля";
    alert(`Привіт ` + name);
}
