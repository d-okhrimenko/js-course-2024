document.addEventListener('DOMContentLoaded', () => {
    const yearInput = document.getElementById('yearInput');
    const checkButton = document.getElementById('checkButton');
    const popup = document.getElementById('popup');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const calendar = document.getElementById('calendar');
    const closeButton = document.getElementById('closeButton');

    checkButton.addEventListener('click', checkLeapYear);
    closeButton.addEventListener('click', closePopup);

    function checkLeapYear() {
        const year = parseInt(yearInput.value);

        if (isNaN(year)) {
            showPopup('Помилка', 'Будь ласка, введіть коректний рік.');
            return;
        }

        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

        if (isLeapYear) {
            resultTitle.textContent = 'Високосний рік';
            resultTitle.classList.add('leap-year');
            resultMessage.textContent = `${year} рік є високосним.`;
            calendar.innerHTML = '29 лютого';
            calendar.style.display = 'block';
        } else {
            resultTitle.textContent = 'Не високосний рік';
            resultTitle.classList.remove('leap-year');
            resultMessage.textContent = `${year} рік не є високосним.`;
            calendar.style.display = 'none';
        }

        showPopup();
    }

    function showPopup(title, message) {
        if (title && message) {
            resultTitle.textContent = title;
            resultMessage.textContent = message;
            calendar.style.display = 'none';
        }
        popup.style.display = 'block';
        setTimeout(closePopup, 10000);
    }

    function closePopup() {
        popup.style.display = 'none';
    }
});