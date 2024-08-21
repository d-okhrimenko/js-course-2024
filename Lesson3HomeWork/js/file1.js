document.querySelector(".btn").addEventListener("click", () => {
    const number = prompt("Введіть число");
    if (parseInt(number)) {
        alert(number % 2 === 0 ? "Парне" : "Непарне");
    } else {
        alert("Не число");
    }
});
