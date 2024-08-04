const showDateBtn = document.getElementById('show-date-button');
const currentDateElement = document.getElementById('current-date')

showDateBtn.addEventListener('click', () => {
    const currentDate = new Date();
    //This is method to show in DevTools->Console
    console.log(currentDateElement)
    //Show text below button
    currentDateElement.textContent = `Today: ${currentDate.toLocaleDateString()}`;
    
});
    //Or do alert 
    showDateBtn.addEventListener('click', () => {
        alert(`Поточна дата: ${new Date().toLocaleDateString()}`);
    });