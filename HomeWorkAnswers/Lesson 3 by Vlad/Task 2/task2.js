// document.querySelector("#btn").onclick = function () {
//     let date = new Date(); //we are getting current date, time and day
//     let dayNum = Number(date.getDay()); //we are extracting the day number

//     // we are assigning day number to the day name starting from 0= Sunday
//     if (dayNum == 0) {
//         let outputDay = `Current day is: Sunday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }
//     else if (dayNum == 1) {
//         let outputDay = `Current day is: Monday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }
//     else if (dayNum == 2) {
//         let outputDay = `Current day is: Tueasday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }
//     else if (dayNum == 3) {
//         let outputDay = `Current day is: Wednesday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }
//     else if (dayNum == 4) {
//         let outputDay = `Current day is: Thursday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }
//     else if (dayNum == 5) {
//         let outputDay = `Current day is: Friday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }
//     else if (dayNum == 6) {
//         let outputDay = `Current day is: Satarday`;
//         document.querySelector("#output").innerHTML = outputDay;
//     }

// }


document.querySelector("#btn").onclick = function () {
    let date = new Date(); // we are getting current date, time and day
    let dayNum = date.getDay(); // we are extracting the day number
    let outputDay;

    // Assign day name based on the day number
    if (dayNum == 0) {
        outputDay = "Current day is: Sunday";
    }
    else if (dayNum == 1) {
        outputDay = "Current day is: Monday";
    }
    else if (dayNum == 2) {
        outputDay = "Current day is: Tuesday";
    }
    else if (dayNum == 3) {
        outputDay = "Current day is: Wednesday";
    }
    else if (dayNum == 4) {
        outputDay = "Current day is: Thursday";
    }
    else if (dayNum == 5) {
        outputDay = "Current day is: Friday";
    }
    else if (dayNum == 6) {
        outputDay = "Current day is: Saturday";
    }

    // Update the output element with the day name
    document.querySelector("#output").innerHTML = outputDay;
}