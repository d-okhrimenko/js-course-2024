function ifEven() {
    let userInput = parseInt(prompt('Введіть ціле число, натисніть "ОК"'));
    if (!isNaN(userInput) && userInput !== 0) {
        result = userInput % 2;
        if (result !== 0) {
            alert(`Введене число "${userInput}" є непарним`)
        } else {
            alert(`Введене число "${userInput}" є парним`)
        }
    } else {
        alert('Введіть тільки ціле число відмінне від "0"')
    }
};
