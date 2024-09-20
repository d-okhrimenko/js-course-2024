let value = prompt("Введіть будь-який рік, щоб дізнатись чи високосний він");
let year = parseInt(value);

if (Number.isInteger(year)) {
    let yearToCheck = new Date(`${year}-02-29`);
    let february = yearToCheck.getDate();

    if (february == 29) {
        alert(`${year} рік високосний`);
    } else {
        alert(`${year} рік невисокосний`);
    }
}

