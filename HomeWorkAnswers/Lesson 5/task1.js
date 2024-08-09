function imtCalculateProgram() {
  const insufficientWeight = "недостатня вага";
  const normalWeight = "нормальна вага";
  const overweight = "надмірна вага";
  const adiposity = "ожиріння";

  const inputHeight = validateInput("Введіть зріст в см:");
  const inputWeight = validateInput("Введіть вагу в кг:");

  const calculateImt = (height, weight) => weight / Math.pow(height, 2);

  const imt = calculateImt(inputHeight / 100, inputWeight);
  const weightCategory = determineTheWeightCategory(imt);

  alert(`У вас ${weightCategory}.`);

  function validateInput(message) {
    while (true) {
      let input = prompt(message);

      if (input === null) {
        alert("Ввід скасовано.\nЗавершення програми...");
        throw new Error("Input cancelled.");
      }

      if (input === "" || isNaN(Number(input))) {
        alert("Некоректний ввід!\nВедіть числове значення.");
      } else if (Number(input) <= 0) {
        alert("Некоректний ввід!\nВведіть число > 0.")
      } else {
        return Number(input);
      }
    }
  };

  function determineTheWeightCategory(imt) {
    switch (true) {
      case imt < 18.5:
        return insufficientWeight;
      case imt >= 18.5 && imt < 24.9:
        return normalWeight;
      case imt >= 25 && imt < 29.9:
        return overweight;
      default:
        return adiposity;
    }
  };
};