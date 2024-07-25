document.querySelector("#btn").onclick = function () {
    let date = new Date();
    let dayNum = Number(date.getDay());

    if (dayNum == 0) {
        let outputDay = `Current day is: Sunday`;
        document.querySelector("#output").innerHTML = outputDay;
    }
    else if (dayNum == 1) {
        let outputDay = `Current day is: Monday`;
        document.querySelector("#output").innerHTML = outputDay;
    }
    else if (dayNum == 2) {
        let outputDay = `Current day is: Tueasday`;
        document.querySelector("#output").innerHTML = outputDay;
    }
    else if (dayNum == 3) {
        let outputDay = `Current day is: Wednesday`;
        document.querySelector("#output").innerHTML = outputDay;
    }
    else if (dayNum == 4) {
        let outputDay = `Current day is: Thursday`;
        document.querySelector("#output").innerHTML = outputDay;
    }
    else if (dayNum == 5) {
        let outputDay = `Current day is: Friday`;
        document.querySelector("#output").innerHTML = outputDay;
    }
    else if (dayNum == 6) {
        let outputDay = `Current day is: Satarday`;
        document.querySelector("#output").innerHTML = outputDay;
    }

}
