document.querySelector("#btn-t2").onclick = function () {
    operations = ['+', '-', '/', '*']

    let score = 0;
    let log = "";

    for (let i = 0; i < 10; i++) {
        let a = Math.round(Math.random() * 10);
        let b = Math.round(Math.random() * 9) + 1;
        let operationCode = Math.round(Math.random() * 3.49);
        let operation = operations[operationCode];

        let answer = prompt(`${a} ${operation} ${b} =`)

        let correctAnswer;
        switch (operation) {
            case '+' :
                correctAnswer = a + b;
                break;
            case '-' :
                correctAnswer = a - b;
                break;
            case '/' :
                correctAnswer = Number((a / b).toFixed(2));
                break;
            case '*' :
                correctAnswer = a * b;
                break;

        }

        log += `\n${a} ${operation} ${b} = ${answer} | ${correctAnswer}`
        
        if (answer == correctAnswer)
        {
            score++;
        } else {

        }
    }
    alert(`Ви набрали ${score} балів.\nДеталі (після вертикальної риска правильна відповідь):` + log)
}