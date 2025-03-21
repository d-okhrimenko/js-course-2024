function getAnswr(message) {
    while (true) {
        let userValue = prompt(message);
        let isValid = !isNaN(userValue) && userValue !== "" && userValue !== null;
        if (isValid) return Number(userValue);
    }
}


let wrongScore = 0;
let correctScore = 0;


for (let i = 0; i < 4; i++) {

    let value1 = Math.floor(Math.random() * 10) + 1;  // generates from 1 to 10

    let value2 = Math.floor(Math.random() * 10) + 1;  // generates from 1 to 10

    let value3 = Math.floor(Math.random() * 100) + 1;  //generates from 1 to 100

    let result;

    let equationDisplay = function showEquation(sign) {
        switch (sign) {
            case "+":
                alert(`${value1} + ${value2}`);
                break;
            case "-":
                alert(`${value1} - ${value2}`);
                break;
            case "*":
                alert(`${value1} * ${value2}`);
                break;
            case "/":
                alert(`${value1} / ${value2}`);
                break;
        }
    }

    let feedbackToUser = function info(value) {
        switch (value) {
            case "correct":
                alert("Congratulations! Correct answer!");
                break;
            case "wrong":
                alert("Not Correct. Try again.");
                break;
            case "wrong finish":
                alert("Sorry, it's been your last trial. See the next equation.");
                break;
        }
    }


    if (value3 <= 25) {
        equationDisplay("+");
        result = value1 + value2;
    } else if (value3 <= 50) {
        equationDisplay("-");
        result = value1 - value2;
    } else if (value3 <= 75) {
        equationDisplay("*");
        result = value1 * value2;
    } else if (value3 <= 100) {
        equationDisplay("/");
        result = (value1 / value2).toFixed(1);
    }

    for (k = 0; k < 3; k++) {

        let userAnswr = getAnswr("Enter your answer");

        if (userAnswr == result) {
            correctScore = correctScore + 1;
            feedbackToUser("correct");
            break;
        } else {

            wrongScore = wrongScore + 1;

            if (k >= 2) {
                feedbackToUser("wrong finish");
            } else { 
                feedbackToUser("wrong");
            }

        }

    }

}

alert(`Wrong answer score is ${wrongScore} \nCorrect answer score is ${correctScore}`);
alert(`Game Over. \nTo re-start press F5 button`);