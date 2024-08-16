function getAverageScore() {
  const confirmKey = '=';

  let scores = [];

  while (true) {
    const inputChoice = validateInput("Оберіть дію:\n1 - ввести оцінки\n2 - згенерувати оцінки автоматично");
    if (operationChoice(scores, inputChoice)) break;
  }

  const displayScores = array => `Ваші оцінки: ${array.join(', ')}`;

  alert(
    `${displayScores(scores)}
    Найнижча оцінка: ${getMinScore(scores)}
    Найвища оцінка: ${getMaxScore(scores)}
    Середній бал: ${calculateAverageScore(scores).toFixed(1)}`
  );

  function operationChoice(array, choice) {
    switch (choice) {
      case 1:
        getScores(array);
        return true;
      case 2:
        const scoresCount = validateInput("Введіть кількість оцінок:");
        generateRandomScores(array, scoresCount);
        return true;
      default:
        alert("Невірний вибір!");
        return false;
    }
  };

  function getScores(array) {
    while (true) {
      const inputScore = validateInput(`Введіть оцінку №${array.length + 1}:\n"${confirmKey}" - для завершення вводу`);
      if (inputScore === confirmKey) break;
      array.push(inputScore);
    }
  };

  function generateRandomScores(array, count) {
    for (let i = 0; i < count; i++) {
      array.push(Math.floor(Math.random() * 101));
    }
  };

  function getMinScore(array) {
    return Math.min(...array);
  };

  function getMaxScore(array) {
    return Math.max(...array);
  };

  function calculateAverageScore(array) {
    return array.reduce((sum, number) => sum + number, 0) / array.length;
  };

  function validateInput(message) {
    while (true) {
      let input = prompt(message);

      if (input === null) {
        alert("Ввід скасовано.\nЗавершення програми...");
        throw new Error("Input cancelled.");
      }

      if (input === confirmKey) {
        return confirmKey;
      }

      if (input === "" || isNaN(parseInt(input))) {
        alert("Некоректний ввід!\nВедіть ціле число.");
      } else if ((parseInt(input)) < 0 || (parseInt(input)) > 100) {
        alert("Некоректний ввід!\nВведіть число від 0 до 100.")
      } else {
        return parseInt(input);
      }
    }
  };
};