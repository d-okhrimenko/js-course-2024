document.querySelector('#startOddOrEven').onclick = (() => {
  let value = prompt('Введіть число для визначення парності або непарності');
  evenOrOdd(value);
  
  function evenOrOdd (number) {
    number = parseInt(number);
  
    if (isNaN(number)) {
      alert('Будь ласка, введіть дані у вигляді числа');
      return;
    }
  
    if (number % 2 === 0) {
      return alert('Число парне');
    }

    return alert('Число непарне');
  }
});

document.querySelector('#startWhatDay').onclick = (() => {
  let currentDayOfWeek = new Date().getDay();
  let output = '';

  switch (currentDayOfWeek) {
    case 0:
      output = "неділя";
      break;
    case 1:
      output = "понеділок";
      break;
    case 2:
      output = "вівторок";
      break;
    case 3:
      output = "середа";
      break;
    case 4:
      output = "четвер";
      break;
    case 5:
      output = "пʼятниця";
      break;
    case 6:
      output = "субота";
      break;
  }

  return alert(`Сьогодні ${output}`);
});


document.querySelector('#calcLeapYear').onclick = (() => {
  let year = prompt('Введіть рік, щоб визначити чи він високосний');
  let result = 'невисокосний рік';
  year = parseInt(year);
  
  if(isNaN(year)) {
    alert('Будь ласка, переконайтеся, що ви ввели рік правильно');
    return;
  }
  
  if (year % 4 === 0) {
    result = 'високосний рік';  
  }
  
  if (year % 100 === 0 && year % 400 !== 0) {
    result = 'невисокосний рік';
  }
  
  return alert(`${year} - це ${result}`);
})
