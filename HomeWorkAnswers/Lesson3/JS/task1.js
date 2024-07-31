let valueNumber = prompt("Enter a number");
let number = Number(valueNumber);
let result;

if(!isNaN(number)) {
  let division = 2;
  let result = number % division;
  
  switch(result) {
  case 1:
    alert("The remainder is 1.");
    break;
  case 0:
  alert("The remainder is 0.");
    break;
  default:
    alert("Error division.");
    break;
}
}  
else {
  alert('This value is not a number.')
}