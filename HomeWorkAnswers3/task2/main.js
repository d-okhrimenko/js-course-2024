let todayNumber = new Date().getDay();

let todayString = "";

switch (todayNumber) {
    case 0:
        todayString = "Sunday";
        break
    case 1:
        todayString = "Monday";
        break
    case 2:
        todayString = "Tuesday";
        break
    case 3:
        todayString = "Wednesday";
        break
    case 4:
        todayString = "Thurday";
        break
    case 5:
        todayString = "Friday";
        break
    case 6:
        todayString = "Saturday";
        break
}

document.querySelector("#today").innerHTML = `Today is ${todayString}`;