let year = Number(prompt("Введіть теперешній рік "));
if(isNaN(year)){
    alert("Помилка");
}else
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        alert("Високосний");
    } else {
        alert("Не високосний");}
