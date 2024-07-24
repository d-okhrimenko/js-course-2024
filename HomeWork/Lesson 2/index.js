const currentDate = new Date();
document.getElementById('current-date').textContent = currentDate;



const userName = "Олег";
document.getElementById('hello-button').addEventListener('click', () => {
    alert(`Привіт, ${userName}`);
});