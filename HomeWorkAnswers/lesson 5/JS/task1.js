let getBMI = (mass, height) => (mass / Math.pow((height/100), 2)).toFixed(2);

let getBMICategory = bmi => {
    if(bmi < 18.5) return `Недостатня вага: ІМТ = ${bmi}`;
    else if(bmi >= 30) return `Ожиріння: ІМТ = ${bmi}`;
    else if(bmi <= 24.9) return `Нормальна вага: ІМТ = ${bmi}`;
    else return `Надмірна вага: ІМТ = ${bmi}`;
}

let getNumericValue = msg => {
    while (true) {
      let value = prompt(msg);
      if (!isNaN(value) && value !== "" && value !== null) return Number(value);
      alert("Не коректне значення!");
    }
  }

  let bodyMass = getNumericValue("Введіть значення ваги (кг): ");
  let bodyHeight = getNumericValue("Введіть значення зросту (см): ");

  let bmiCategory = getBMICategory(getBMI(bodyMass, bodyHeight));
  alert(bmiCategory);