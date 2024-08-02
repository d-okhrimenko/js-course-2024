let currentDate = new Date();
let currentDay = currentDate.getDay();

switch (currentDay) {
    case 0:
        alert('Current day is Sunday');
        break;
    case 1:
        alert('Current day is Monday');
        break;
    case 2:
        alert('Current day is Tuesday');
        break;
    case 3:
        alert('Current day is Wednesday');
        break;
    case 4:
        alert('Current day is Thursday');
        break;
    case 5:
        alert('Current day is Friday');
        break;
    case 6:
        alert('Current day is Saterday');
        break;
    default:
        alert('Invalid day');
}
