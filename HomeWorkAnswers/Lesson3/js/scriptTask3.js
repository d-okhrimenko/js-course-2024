while (true) {
    let value = prompt("Enter the year"),
        year = Number(value);
    if (value === null) {
        alert("You have canceled input!");
    } else if (value.trim() === "" || isNaN(year) || year < 0 || !Number.isInteger(year)) {
        alert("Incorrect input!");
    } else {
        const date = new Date(year, 1, 29);
        const day = date.getDate();
        if (day === 29) {
            alert(`${year} leap year`);
        } else {
            alert(`${year} not a leap year`);
        }
    }
}
