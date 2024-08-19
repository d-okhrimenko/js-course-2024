let taskCount = +prompt("Input count of task");

let trueAnsCounter = 0;
let falseAnsCounter = 0;

for (i = 0; i < taskCount; i++) {

    let checker = null;
    let randomActionNumber = Math.floor(Math.random() * 4 + 1);
    let randomNumber1;
    let randomNumber2;

    if (randomActionNumber == 4) {
        do {
            randomNumber1 = Math.floor(Math.random() * 10 + 1);
            randomNumber2 = Math.floor(Math.random() * 10 + 1);
        } while (randomNumber1 % randomNumber2 != 0)
    } else {
        randomNumber1 = Math.floor(Math.random() * 10 + 1);
        randomNumber2 = Math.floor(Math.random() * 10 + 1);
    }

    let randomAction = "";
    let result;
    switch (randomActionNumber) {
        case 1:
            randomAction = "+";
            result = randomNumber1 + randomNumber2;
            break;
        case 2:
            randomAction = "-"
            result = randomNumber1 - randomNumber2;
            break;
        case 3:
            randomAction = "*"
            result = randomNumber1 * randomNumber2;
            break;
        case 4:
            randomAction = "/"
            result = randomNumber1 / randomNumber2;
            break;
    }

    while (checker != true) {

        let answer = +prompt(`${randomNumber1} ${randomAction} ${randomNumber2}. What is the relust?`)

        console.log(randomNumber1, randomAction, randomNumber2," = ", result);

        if (answer == result) {
            checker = true;
            trueAnsCounter++;
            alert("Good job")
        } else {
            checker = false;
            falseAnsCounter++;
            alert("Incorrect answer, try again")
        }

    }

}

alert(`Your results: Total count of tasks - ${taskCount}. Rigth answers - ${trueAnsCounter}, incorrect answers - ${falseAnsCounter}`)