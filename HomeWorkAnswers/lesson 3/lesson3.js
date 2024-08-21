function task1() {
  const EVEN = "парне";
  const ODD = "непарне";

  let input;
  while (true) {
    input = prompt("Введіть число:");

    if (input === null) {
      return;
    }

    if (input.trim() !== "" && !isNaN(Number(input))) {
      alert(`Число ${input} - ${getNumber(input)}`);
      break;
    } else {
      alert("Некоректний ввід!");
    }
  }

  function getNumber(number) {
    if (Math.trunc(number) % 2 === 0) {
      return EVEN;
    } else {
      return ODD;
    }
  };
};

function task2() {
  const TODAY = new Date().getDay();
  alert(`Сьогодні ${getCurrentDay(TODAY)}`);

  function getCurrentDay(today) {
    switch (today) {
      case 1:
        return "понеділок";
      case 2:
        return "вівторок";
      case 3:
        return "середа";
      case 4:
        return "четвер";
      case 5:
        return "п\'ятниця";
      case 6:
        return "субота";
      case 7:
        return "неділя";
    }
  };
};

function task3() {
  const LEAP_YEAR = "високосний";
  const NO_LEAP_YEAR = "не високосний";

  let input;
  while (true) {
    input = prompt("Введіть рік:");

    if (input === null) {
      return;
    }

    if (input.trim() !== "" && !isNaN(Number(input))) {
      alert(`${input} - ${isLeapYear(input)} рік`);
      break;
    } else {
      alert("Некоректний ввід!");
    }
  }


  function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return LEAP_YEAR;
    } else {
      return NO_LEAP_YEAR;
    }
  };
};
