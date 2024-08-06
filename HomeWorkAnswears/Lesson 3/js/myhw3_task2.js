alert(new Date());
console.log(new Date().getFullYear());
let day = new Date().getDay();
console.log(day);

//if else if
// document.querySelector(".dayWeek").onclick = function () {
//     if (day == 0) {
//         alert("Неділя");
//     } else if (day == 1) {
//         alert("Понеділок");
//     } else if (day == 2) {
//         alert("Вівторок");
//     } else if (day == 3) {
//         alert("Середа");
//     } else if (day == 4) {
//         alert("Четвер");
//     } else if (day == 5) {
//         alert("П'ятниця");
//     } else if (day == 6) {
//         alert("Субота");
//     } else if (day == 7) {
//         alert("Щось пішло не так!!!")
//     }
// }


//switch
document.querySelector(".dayWeek").onclick = function () {
    switch (day) {
        case 0:
        alert("НЕДІЛЯ");
        break;

        case 1:
        alert("ПОНЕДІЛОК");
        break;

        case 2:
        alert("ВІВТОРОК");
        break;

        case 3:
        alert("СЕРЕДА");
        break;

        case 4:
        alert("ЧЕТВЕР");
        break;

        case 5:
        alert("П'ЯТНИЦЯ");
        break;

        case 6:
        alert("СУБОТА");
        break;
    }
}