
let vaga = +prompt("Введіть вагу");
let height = +prompt("Введіть зріст"); 

let formula = vaga / height ** 2;
function checkIMT() {
    if (formula < 18.5) {
        alert("Недостатня вага")
    } else if (formula < 24.9) {
        alert("Нормальна вага")
    } else if (formula < 29.9){
        alert("Надмірна вага")
    }else if (formula >= 30)
    alert("Ожиріння")
}
checkIMT(); 