function isLeapYear() {
    let userInput = parseInt(prompt("Введіть рік"));
    if (!isNaN(userInput) && userInput > 0) {
        if(userInput % 4 === 0 && (userInput % 100 !== 0 || userInput % 400 === 0)) {
            alert(`Рік "${userInput}" високосний`);
        } else {
            alert(`Рік "${userInput}" не високосний`);
        }
    } else {
        alert("Введіть рік більший від 0");
    }
};
