const year = +prompt("Enter a year");

if (isNaN(year)) {
  alert("Please enter a valid number.");
} else {
  let isLeapYear = false;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
  }

  if (isLeapYear) {
    alert(year + " is a leap year.");
  } else {
    alert(year + " is not a leap year.");
  }
}
