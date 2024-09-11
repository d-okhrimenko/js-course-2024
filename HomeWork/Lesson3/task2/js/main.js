function checkDay() {
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    const currentDate = new Date();
    const dayOfWeek = days[currentDate.getDay()];

    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = `Сьогодні ${dayOfWeek}!`;
        resultElement.classList.remove('fade-in');

        // Trigger reflow
        void resultElement.offsetWidth;

        resultElement.classList.add('fade-in');
    }
}