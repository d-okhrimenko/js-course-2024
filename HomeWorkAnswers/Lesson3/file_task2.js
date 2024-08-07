document.querySelector("#btn").onclick = function() {
    let today = new Date().toLocaleDateString();    
    let dayWeek = new Date().getDay();
    let output = document.querySelector("#currDate");
    switch (dayWeek) {
        case 0:
            output.innerHTML = "Сьогодні - неділя, " + today;
            break;
        case 1:
            output.innerHTML = "Сьогодні - понеділок, " + today;
            break;
        case 2:
            output.innerHTML = "Сьогодні - вівторок, " +  today;
            break;
        case 3:
            output.innerHTML = "Сьогодні - середа, " +  today;
            break;
        case 4:
            output.innerHTML = "Сьогодні - четвер, " + today;
            break;
        case 5:
            output.innerHTML = "Сьогодні  - п'ятниця, " + today;
            break;
        case 6:
            output.innerHTML = "Сьогодні - субота, " + today;
            break;
    }
}