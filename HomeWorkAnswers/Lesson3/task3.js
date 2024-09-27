while (true) {
  let input = prompt('Enter a year or exit:');
  if (input == 'exit' || input === null) {
    break;
  }
  let year = Number(input);

  if (isNaN(year)) {
    alert(`The value ${input} is not a year.`);
  } else {
    if (isLeapYear(year)) {
      alert(`The ${input} is a leap year!`);
    } else {
      alert(`The ${input} is a regular year.`);
    }
  }
}

function isLeapYear(year) {
  return new Date(year, 1, 29).getMonth() === 1;
}
