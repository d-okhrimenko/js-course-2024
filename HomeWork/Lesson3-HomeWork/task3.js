inputYear();

function inputYear() {
    let year = prompt('Введите год (Целое число):');

    if (isNaN(year)) {
        alert('Это не число' + '\n' + 'Попробуйте снова:')
        inputYear();
    } else {
        if (year % 1 !== 0) {
            alert('Число не целое' + '\n' + 'Попробуйте снова:')
            inputYear();
        } else {
            if(year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0)){
                alert('Это высосный год')
            } else{
                alert('Это не высокосный год')
            }
        }
    }
}
