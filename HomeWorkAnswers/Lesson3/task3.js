// Написати програму, яка перевіряє, чи є введений рік високосним.

const userValue = prompt("Введіть рік");
if (userValue !== "") {
    const userValueToNum = Number(userValue);
    if(isNaN(userValueToNum)) {
        alert('Ви ввели не число!');
    }  else if (!Number.isInteger(userValueToNum)) {
        alert('Число повинно бути цілим!');
    } else {
        let userDate = new Date(userValueToNum, 2, 0);
        let daysAmount = userDate.getDate();
        if(daysAmount === 29) {
            alert('Це високосний рік');
        } else {
            alert('Це не високосний рік');
        }
    }
} else {
    alert('Ви нічого не ввели!');
}
