document.querySelector(".btn").addEventListener("click", () => {
    const year = prompt("Введіть рік");

    if (isNaN(year)) {
        alert("Введіть коректно рік");
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            alert("Високосний рік");
        } else {
            alert("Не високосний рік");
        }
    }
});
