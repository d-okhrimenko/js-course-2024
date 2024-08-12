let inputYear;

do {
    inputYear = Number(prompt("Input Year"));

    if (inputYear % 1 == 0) {

        if (inputYear % 4 == 0) {
            if ((inputYear % 100 == 0) && (inputYear % 400 !== 0)) {
                alert("Not Leap year")
            } else {
                alert("Leap year")
            }
        } else {
            alert("Not a leap year")
        }

    } else {
        alert("Incorrect year, please input only integer")
    }
} while (inputYear % 1 !== 0);