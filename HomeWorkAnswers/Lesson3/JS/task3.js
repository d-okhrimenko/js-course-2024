let year = prompt("Enter a year");
year = parseInt(year);

if(!isNaN(year)) {
  document.querySelector("#year_input").innerHTML = "The entered year is " + year;
  
  if (year % 400 ===0 ){
    alert(year + " the year is leap");
  }

  else if  (year % 100 === 0 ) {
    alert(year + " the year is not leap");
  }

  else if (year %4 === 0){
    alert(year + " the year is leap");
  }

  else {
    alert(year + " the year is not leap");
  }
}
else {
  alert("The value is not a number");
}
