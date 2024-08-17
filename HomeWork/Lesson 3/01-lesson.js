const value = prompt('Enter your number');

const showNumber = (boolean) =>
    boolean ? alert('Number is doubles') : alert('Number is not doubles');

const getNumber = (value) => {
    if (value === null || !value.trim()) {
        alert('Enter some value');
        return;
    }

    const number = Number(value);
    const isValidNumber = !isNaN(number);

    if (!isValidNumber) {
        alert('Enter valid integer number');
        return;
    };

    const isDoubles = number % 2 === 0;
    showNumber(isDoubles);

    return;
}

getNumber(value);

