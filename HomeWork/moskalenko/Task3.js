function isLeap(year) {
    result = false;
    if (year % 4 == 0)
        result = true
    if (year % 100 == 0)
        result = false
    if (year % 400 == 0)
        result = true
    // Власне, можна зробити через 5 точки виходу. Тоді умови мають перевірятися в зворотньому порядку
    return result
}

document.querySelector("#btn-t3").onclick = function () {
    let num = parseInt(prompt("Введіть рік"))
    if (num == NaN)
        alert("Це не число")
    else
    {
        alert(isLeap(num) ? "Рік високосний" : "Рік НЕ високосний")
    }
}