
//task1
let ask = prompt("Введіть число")
if (isNaN(ask)) {
     alert("Not a number!") 
} else {
    if (ask % 2 == 0) {
        alert("Число парне")
    } else {
        alert("Число непарне") 
    }
}git

//task2
let curDate = new Date();
let weekDay = curDate.getDay();
 
switch (weekDay) { 
    case (0):
        alert("Неділя");
        break;
    case (1):
        alert("понеділок");
        break;
    case (2):
        alert("вівторок");
        break;
    case (3):
        alert("середа");
        break;
    case (4):
        alert("четвер");
        break;
    case (5):
        alert("п'ятниця");
        break;
    case (6):
        alert("субота");
        break;
} 

//task3
let year = prompt("Введіть рік");   
  
function length() {
    console.log(year.length); 
    if (year.length === 4) {
     
        checkYear(year)
    } else {
        alert("Некоректний ввід")
    }
}
length()

function checkYear() {

    let yearNum = Number(year)
  
  

    if (yearNum % 4 == 0) {
        alert("Рік високосний")
    } else {
        alert("Рік не високосний")
    }
}
