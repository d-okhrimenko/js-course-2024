

let inputNumber = prompt("Введить число:");
inputNumber = Number(inputNumber);

if (isNaN(inputNumber)) {                              // Проверка введенных данных
  alert("Будь ласка, введіть коректне число.");
}
else{

        if (+inputNumber % 2 === 0) {
            alert("Парне число");
        } 
        else {
            alert("Непарне число");
        }

}



  