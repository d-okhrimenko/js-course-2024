const getNumericValue = (message) => {
  while (true) {
    const value = prompt(message);
    const isValid = !isNaN(value) && value !== '' && value !== null;

    if (value === null) {
      return null;
    }

    if (isValid) {
      const validValue = Number(value);
      return validValue;
    }
  }
};

const BMI_CATEGORIES = {
  UNDERWEIGHT: 'Недостатня вага',
  NORMAL: 'Нормальна вага',
  OVERWEIGHT: 'Надмірна вага',
  OBESITY: 'Ожиріння',
};

const calculateBMI = (weight, height) => {
  const bodyMassIndex = weight / (height / 100) ** 2;
  console.log('bodyMassIndex:', bodyMassIndex);

  return bodyMassIndex;
};

const getBMICategory = (bmi) => {
  const { UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESITY } = BMI_CATEGORIES;

  if (bmi < 18.5) {
    return UNDERWEIGHT;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return NORMAL;
  } else if (bmi >= 25 && bmi < 29.9) {
    return OVERWEIGHT;
  } else {
    return OBESITY;
  }
};

const calculateUserBMI = () => {
  while (true) {
    const userWeight = getNumericValue('Введіть, будь ласка, свою вагу у кілограмах');
    // Якщо користувач натиснув "Скасувати", виходимо з циклу
    if (userWeight === null) {
      alert('Розрахунок ІМТ скасовано користувачем.');
      break;
    }

    const userHeight = getNumericValue('Введіть, будь ласка, свій зріст у сантиметрах');
    // Якщо користувач натиснув "Скасувати", виходимо з циклу
    if (userHeight === null) {
      alert('Розрахунок ІМТ скасовано користувачем.');
      break;
    }

    const userBMI = calculateBMI(userWeight, userHeight);
    const userBmiCategory = getBMICategory(userBMI);

    alert(`Ваш ІМТ: ${userBMI.toFixed(2)}\nКатегорія: ${userBmiCategory}`);
  }
};

calculateUserBMI();
