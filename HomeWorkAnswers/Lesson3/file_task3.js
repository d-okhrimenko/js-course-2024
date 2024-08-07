let entYear = Number(prompt("Введіть рік"));
        if (isNaN(entYear)) {
            alert("Ви ввели не число");
        } else if ((entYear % 4 === 0) && (entYear % 100 !== 0)) {
            alert("Цей рік є високосним");
        } else if (entYear % 400 === 0) {
            alert("Цей рік є високосним");
        } else {
            alert("Цeй рік не є високосним");
        }