// let currentDate = new Date().toLocaleDateString();
let currentDate = new Date();
let day = currentDate.getDay();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = daysOfWeek[day];

alert(`Today is ${today}`);