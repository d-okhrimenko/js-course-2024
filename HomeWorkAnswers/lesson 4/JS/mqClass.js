/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mqClass.js
// реалізація гри "Math quiz" через кляс "MathQuizGame"
// реалізовано механізм з обмеженням кількості раундів за гру.
// також реалізовано метод онулення лічильників рахунків коректних та помилкових відповідів
//
// поля клясу:
//   options - масив рядкових значень-математичних операторів
//   this.roundsLimit - кількість раундів гри
//   playerRightAnswerCounter - лічильник коректних відповідів гравця
//   playerWrongAnswerCounter - лічильник помилкових відповідів гравця
//
// методи клясу:
//   getNumber(() - метод отримуєчислові значення для математичних виразів, а в обмеженомваріянті генерує індех математичного оператора
//   getCalculated() - метод обчислення строкового представлення математичного виразу
//   getEvalExpression() - метод формування рядкового представлення математичного виразу
//   getPlayerAnswer() - метод отримання відповіді гравця
//   getStatisticsMsg() - метод формування статистичного повідомлення гравцю
//   play() - основний метод клясу гри
//   refresh() - обнуляємо лічильники об'єкту гри 
//
class MathQuizGame {
    constructor() {
        this.options = ['+', '-', '*', '/'];
        this.roundsLimit = 10;
        this.playerRightAnswerCounter = 0;
        this.playerWrongAnswerCounter = 0;

        this.msgDivider = "\n- - - - - - - - - - - - - - - - - -\n";
    } // constructor()

    // отримуємо згенероване число
    getNumber(restricted = false) {
        return Math.floor(Math.random() * ((restricted) ? this.this.options.length : 100) + ((restricted) ? 0 : 1));
    } // getNumber()

    // обчислюємо рядкове представлення математичного виразу
    getCalculated(expression) {
        return eval(expression + ';')
    } // getCalculated()

    // формуємо рядкове представлення математичного виразу
    getEvalExpression() {
        let evalOperatorIndex = this.getNumber(true);
        return (this.getNumber() + ` ${this.options[evalOperatorIndex]} ` + this.getNumber());
    } // getEvalExpression()

    // отримуємо відповідь гравця
    getPlayerAnswer(evalExpression) {
        let value = prompt(evalExpression + " = ");
        if (!isNaN(value) && value !== "" && value !== null) return Number(value);
    } // getPlayerAnswer()

    // формуємо статистичне повідомлення гравцю з підсумками гри
    getStatisticsMsg() {
        return ("Статистика відповідів:" + 
                    "\n(коректні)   " + this.playerRightAnswerCounter + " | " +
                    this.playerWrongAnswerCounter  + "   (помилкові)" +
                    this.msgDivider);
    } // getStatisticsMsg()

    // основне тіло гри
    play() {
        for(let indx = 0; indx < this.roundsLimit; indx++) {
            let evalExpression = this.getEvalExpression();
            let evalResult = this.getCalculated(evalExpression).toFixed(2);

            let playerAnswer = this.getPlayerAnswer(this.getStatisticsMsg() + evalExpression);

            if(playerAnswer == evalResult) this.playerRightAnswerCounter++;
            else this.playerWrongAnswerCounter++;
        }
        alert("Гру завершено!" + this.msgDivider + this.getStatisticsMsg());
    } // play()

    // онулюємо лічильники гри
    refresh() {
        this.playerRightAnswerCounter = 0;
        this.playerWrongAnswerCounter = 0;
    } // refresh()
}
