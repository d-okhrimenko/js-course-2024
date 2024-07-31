alert(new Date());
console.log(new Date());
let day = new Date().getDay();
console.log(day);

document.querySelector(".dayWeek").onclick = function() {
    if(day == 0) {
        alert("Неділя");
    }
    if(day == 1) {
        alert("Понеділок");
    }
    if(day == 2) {
        alert("Вівторок");
    }
    if(day == 3) {
        alert("Середа");
    }
    if(day == 4) {
        alert("Четвер");
    }
    if(day == 5) {
        alert("П'ятниця");
    }
    if(day == 6) {
        alert("Субота");
    }
}

let a = "Сьогодні ";
if(day == 0) {
    alert(a + "Неділя");
}
if(day == 1) {
    alert(a + "Понеділок");
}
if(day == 2) {
    alert(a + "Вівторок");
}
if(day == 3) {
    alert(a + "Середа");
}
if(day == 4) {
    alert(a + "Четвер");
}
if(day == 5) {
    alert(a + "П'ятниця");
}
if(day == 6) {
    alert(a + "Субота");
}