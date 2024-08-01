inputNumber();

function inputNumber() {
    let number = prompt('Введите целое число:');

    if (isNaN(number)) {
        alert('Это не число' + '\n' + 'Попробуйте снова:')
        inputNumber();
    } else {
        if (number % 1 !== 0) {
            alert('Число не целое' + '\n' + 'Попробуйте снова:')
            inputNumber();
        } else {
            if(number % 2 === 0){
                alert('Это парное число')
            } else{
                alert('Это не парное число')
            }
        }
    }
}

