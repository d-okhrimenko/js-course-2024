document.querySelector("#btn").onclick = function () {
    let toDate = new Date();
    // console.log(toDate.getDay());
    // console.log(typeof toDate.getDay());
    // switch (toDate.getDay()) {
    //     case 0:
    //         alert("Сьогодні неділя");
    //         break;
    //     case 1:
    //         alert("Сьогодні понеділок");
    //         break;
    //     case 2:
    //         alert("Сьогодні вівторок");
    //         break;
    //     case 3:
    //         alert("Сьогодні середа");
    //         break;
    //     case 4:
    //         alert("Сьогодні четвер");
    //         break;
    //     case 5:
    //         alert("Сьогодні п'ятниця");
    //         break;
    //     case 6:
    //         alert("Сьогодні субота");
    //         break;
    // }    
    if (toDate.getDay() == 0) {
        alert("Сьогодні неділя");
    } else if (toDate.getDay() == 1) {
        alert("Сьогодні понеділок");
    } else if (toDate.getDay() == 2) {
        alert("Сьогодні середа");
    } else if (toDate.getDay() == 3) {
        alert("Сьогодні понеділок");
    } else if (toDate.getDay() == 4) {
        alert("Сьогодні четвер");
    } else if (toDate.getDay() == 5) {
        alert("Сьогодні п'ятниця");
        console.log("Вітаю!!!");
    } else if (toDate.getDay() == 6) {
        alert("Сьогодні субота");
    } 
};