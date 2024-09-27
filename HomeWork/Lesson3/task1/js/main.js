function checkNumber() {
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');

    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        alert('Будь ласка, введіть коректне число.');
        return;
    }

    const isEven = number % 2 === 0;
    const message = isEven ? 'Парне число!' : 'Непарне число!';
    const color = isEven ? '#4CAF50' : '#f44336';

    result.textContent = message;
    result.style.color = color;
    result.classList.add('show');
    result.classList.add('pulse');

    // Reset animation
    setTimeout(() => {
        result.classList.remove('pulse');
    }, 500);
}