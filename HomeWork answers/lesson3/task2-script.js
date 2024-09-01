let currentDate = new Date();
let currentDay = currentDate.getDay();

switch (currentDay){
    case 1:
        console.log("Сьогодні понеділок");
        break;
    case 2:
        console.log("Сьогодні вівторок");
        break;
    case 3:
        console.log("Сьогодні середа");
        break;
    case 4:
        console.log("Сьогодні четвер");
        break;
    case 5:
        console.log("Сьогодні п'ятниця");
        break;
    case 6:
        console.log("Сьогодні субота");
        break;
    case 0:
        console.log("Сьогодні неділя");
        break;
}
