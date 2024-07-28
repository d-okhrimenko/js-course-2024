let date = new Date();
let day = date.getDay();

if (day === 0) alert("Сьогодні Неділя");
else if (day === 1) alert("Сьогодні Понеділок");
else if (day === 2) alert("Сьогодні Вівторок");
else if (day === 3) alert("Сьогодні Середа");
else if (day === 4) alert("Сьогодні Четвер");
else if (day === 5) alert("Сьогодні П'ятниця");
else alert("Сьогодні Субота");
