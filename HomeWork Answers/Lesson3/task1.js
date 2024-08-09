let number =Number( prompt("Введіть число "));
console.log(number);
if(number != " "){
    if(number % 2 == 0){
        alert("Число парне");
    }else
        alert("Число непарне");
}else
    alert("Помилка");
