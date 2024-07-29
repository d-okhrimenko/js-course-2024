let year = +prompt ("Введіть рік: ");

if( (year % 4 == 0 &&(year % 100 || year % 400 == 0 )) ? true : false){
    alert('рік високосний')}
else {
  alert('рік НЕ високосний');
}
