let year;
year = Number(prompt("Enter year"));

if (Number.isInteger(year)) {
  let result =
    (year % 4 && year % 100 != 0) || year % 400 == 0
      ? "This is a leap year"
      : "This year is not a leap year";
  alert(result);
} else {
  alert("Incorrect data. Please enter year");
}
