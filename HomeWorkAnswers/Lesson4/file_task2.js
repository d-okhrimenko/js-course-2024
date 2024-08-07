document.querySelector("#begin").onclick = function() {
for (r = 0; r < 5; r++) {
    const oper = ["+", "-", "*", "/"];
    let randNum1 = Math.floor(Math.random() * 100) + 1;
    let randNum2 = Math.floor(Math.random() * 100) + 1;
    let ranOper = Math.floor(Math.random() * 4);
    let selectOper = oper[ranOper];
    let result;

    switch (selectOper) {
        case "+":
            result = randNum1 + randNum2
            break;
        case "-":
            result = randNum1 - randNum2
            break;
        case "*":
            result = randNum1 * randNum2
            break;
        case "/":
            result = randNum1 / randNum2
            break;
    }

    function getValue(message) {
        while (true) {
            let value = prompt(message);
            let isValid = !isNaN(value) && value !== "" && value !== null;
            if (isValid) return Number(value);
        }
    }

    let corrAnsw = 0;
    let wrongAnsw = 0;
    let wrongAnsw1 = 0;

    for (let i = 3; i > 0; i--) {
        let userValue = getValue(`Вкажіть правильний результат математичного виразу: \n${randNum1} ${selectOper} ${randNum2} \nУ вас буде 3 спроби`);
        if (userValue === result) {
            alert("Ваша відповідь вірна!");
            corrAnsw++;
            break;
        }
        else if (i > 1) {
            alert(`Ваша відповідь не вірна! Лишилось спроб: ${i - 1}`);
            wrongAnsw++;
        }
        else {
            alert("Ваша відповідь не вірна! Спроб більше немає");
            wrongAnsw1++;
        }
    }

    alert(`Вірних відповідей: ${corrAnsw} \nНевірних відповідей: ${wrongAnsw + wrongAnsw1}`);
}
alert("Гру завершено!");
};