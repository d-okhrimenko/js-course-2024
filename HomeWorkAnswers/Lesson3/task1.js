

let inputNumber = prompt("Введить число:");
inputNumber = Number(inputNumber);

if (isNaN(inputNumber)) {
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



  