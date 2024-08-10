// Написати програму, яка визначає, чи є введене число парним або непарним.

const userValue = prompt('Введіть число');

if(userValue !== "") {
    const userNumber = Number(userValue);
    if(!isNaN(userNumber)) {
        if(userNumber % 2) {
            alert('Це непарне число');
        } else {
            alert('Це парне число');
        }
    } else {
        alert('Ви ввели не число!');
    }
}else {
    alert('Ви нічого не ввели!');
}

