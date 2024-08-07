    // Task 1

    let number = prompt("Введіть число");
    number = Number(number);
    console.log(number);

    if(number % 2 > 0) {
        alert("Число не парне");
    } else {
        alert("Число парне");
        }

    // Task 2

    let currentDay = new Date().getDay();
    console.log(currentDay);

    if(currentDay === 1) {
        alert("Блін, тільки понеділок");
    }
    if(currentDay === 2) {
        alert("Хм, вівторок");
    }
    if(currentDay === 3) {
        alert("Вже середа");
    }
    if(currentDay === 4) {
        alert("Скоро...четвер");
    }
    if(currentDay === 5) {
        alert("Ура Пятниця");
    }
    if(currentDay === 6) {
        alert("Ура Субота");
    }
    if(currentDay === 0) {
        alert("Неділя");
    }

    // Task 3

    let year = prompt("Введіть рік");
    year = Number(year);
    console.log(year);

    if(year % 4 == 0){
        alert("Рік високосний");
    } else{
        alert("Рік не високосний");
    }