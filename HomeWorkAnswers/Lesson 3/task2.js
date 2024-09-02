const today = new Date();
const dayOfWeek = today.getDay();
const days = [
  "Неділя",  
  "Понеділок", 
  "Вівторок", 
  "Середа",   
  "Четвер",   
  "П'ятниця", 
  "Субота"    
];

let message = `Сьогодні ${days[dayOfWeek]}.`;
alert(message)