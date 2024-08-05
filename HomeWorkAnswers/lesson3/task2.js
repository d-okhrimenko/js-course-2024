document.querySelector("#btn").onclick = function () {
    let toDate = new Date();
    let day = toDate.getDay();
    // console.log(toDate.getDay());
    // console.log(typeof toDate.getDay());
    // switch (day) {
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
    if (day == 0) {
        alert("Сьогодні неділя");
    } else if (day == 1) {
        alert("Сьогодні понеділок");
    } else if (day == 2) {
        alert("Сьогодні середа");
    } else if (day == 3) {
        alert("Сьогодні понеділок");
    } else if (day == 4) {
        alert("Сьогодні четвер");
    } else if (day == 5) {
        alert("Сьогодні п'ятниця");
        console.log("Вітаю!!!");
    } else if (day == 6) {
        alert("Сьогодні субота");
    } 
};
