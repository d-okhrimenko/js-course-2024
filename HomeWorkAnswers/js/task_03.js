function isLeapYear() {
    let userInput = parseInt(prompt("Введіть рік"));
    if (!isNaN(userInput) && userInput > 0) {
        // Якщо рік без остачі ділиться на 4, то може бути високосним
        if (userInput % 4 === 0) {
            //  Якщо рік не ділиться без остачі на 100, то може бути високосним
            if (userInput % 100 === 0) {
                // Якщо рік без остачі не ділиться на 100 але ділиться без остачі на 400, то може бути високосним
                if (userInput % 400 === 0) {
                    alert(`Рік "${userInput}" високосний`);
                }

            } else {
                alert(`Рік "${userInput}" високосний`);
            }
        } else {
            alert(`Рік "${userInput}" не високосний`);
        }
    } else {
        alert("Введіть рік більший від 0");
    }
};

