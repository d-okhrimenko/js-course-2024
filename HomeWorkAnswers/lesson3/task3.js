document.querySelector("#btn").onclick = function () {
    let year = +prompt("Введіть рік, який вас цікавить.");
    console.log(year);
    if (year > 3000) {
            alert("Спробуйте інший рік, цей дуже не скоро!!!");
    } else if (year < 1900) {
            alert("Спробуйте інший рік, цей вже не пам'ятаю!!!");
    } else {
        let outYear = new Date(year, 2, 0);
        console.log(outYear.getDate())
        let myYear = document.querySelector("#myYear");
        if (outYear.getDate() == 29) {  
            myYear.innerHTML = `Вітаю! ${year} рік високосний.`;
            myYear.style.color = "red";
        } else {
            myYear.innerHTML = `Вітаю! ${year} рік не є високосним.`;
            myYear.style.color = "blue";
        }
    };
}