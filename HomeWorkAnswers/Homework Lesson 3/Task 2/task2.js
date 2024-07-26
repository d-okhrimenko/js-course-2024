function checkWeekDay() {
    let currentDate = new Date();
    let weekDay = currentDate.getDay();
    switch (weekDay) {
        case 0:
            alert("Today is Sunday");
            break;
        case 1:
            alert("Today is Monday");
            break;
        case 2:
            alert("Today is Tuesday");
            break;
        case 3:
            alert("Today is Wednesday");
            break;
        case 4:
            alert("Today is Thursday");
            break;
        case 5:
            alert("Today is Friday");
            break;
        case 6:
            alert("Today is Saturday");
            break;
        default:
            alert("Get Date Error!")
    }
}

checkWeekDay();
