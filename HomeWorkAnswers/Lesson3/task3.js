let currentYear = prompt("Введить рік:");
currentYear = Number(currentYear);

if (isNaN(currentYear)) {
    alert("Будь ласка, введіть коректий рік");
  }
  else{
    if (+currentYear % 4 === 0)
       {
        alert("Цей рік високосний");
      } else {
        alert("Цей рік не високосний");
      }
  }