function WhichDay() {

    let today = new Date().getDay();
    if (today === 0) {
        alert("Сьогодні неділя");
    } else if (today === 1) {
        alert("Сьогодні понеділок");
    } else if (today === 2) {
        alert("Сьогодні вівторок");
    } else if (today === 3) {
        alert("Сьогодні середа");
    } else if (today === 4) {
        alert("Сьогодні четвер");
    } else if (today === 5) {
        alert("Сьогодні п'ятниця");
    } else if (today === 6) {
        alert("Сьогодні субота");
    }
};
