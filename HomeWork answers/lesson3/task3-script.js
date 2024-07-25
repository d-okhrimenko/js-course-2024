let tempYear = prompt("Введіть рік");

tempYear = Number(tempYear);

if (isNaN(tempYear)) {
    alert("Введене значення не є числом");
} else {
    if (!Number.isInteger(tempYear)) {
        alert("Введене значення не є цілим числом");
    } else {
        let date = new Date(tempYear, 1, 29);

        if (date.getDate() === 29) {
            alert(tempYear + " рік є високосним");
        } else {
            alert(tempYear + " рік не є високосним");
        }
    }
}


