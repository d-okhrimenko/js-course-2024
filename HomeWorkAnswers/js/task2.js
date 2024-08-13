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

// Функція для обчислення площі та периметру кола
const calculateCircleAreaAndPerimeter = (radius) => {
  const area = Math.PI * Math.pow(radius, 2);
  const perimeter = 2 * Math.PI * radius;
  return { area, perimeter };
};

// Функція для обчислення площі та периметру прямокутника
const calculateRectangleAreaAndPerimeter = (length, width) => {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return { area, perimeter };
};

// Функція для обчислення площі та периметру трикутника
const calculateTriangleAreaAndPerimeter = (a, b, c) => {
  const perimeter = a + b + c;
  const semiPerimeter = perimeter / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  return { area, perimeter };
};

const calculateGeometry = () => {
  while (true) {
    const figure = prompt('Виберіть фігуру для обчислення: коло/прямокутник/трикутник');

    // Якщо користувач натиснув "Скасувати", виходимо з циклу
    if (figure === null) {
      alert('Обчислення скасовано.');
      break;
    }

    let result;

    switch (figure.toLowerCase()) {
      case 'коло':
        const radius = getNumericValue('Введіть радіус кола:');

        if (radius === null) {
          alert('Розрахунок обчислення площі та периметру кола скасовано.');
          break;
        }

        result = calculateCircleAreaAndPerimeter(radius);

        alert(`Площа кола: ${result.area.toFixed(2)}\nПериметр кола: ${result.perimeter.toFixed(2)}`);
        break;

      case 'прямокутник':
        const length = getNumericValue('Введіть довжину прямокутника:');

        if (length === null) {
          alert('Розрахунок обчислення площі та периметру прямокутника скасовано користувачем.');
          break;
        }

        const width = getNumericValue('Введіть ширину прямокутника:');

        if (width === null) {
          alert('Розрахунок обчислення площі та периметру прямокутника скасовано користувачем.');
          break;
        }

        result = calculateRectangleAreaAndPerimeter(length, width);
        alert(`Площа прямокутника: ${result.area.toFixed(2)}\nПериметр прямокутника: ${result.perimeter.toFixed(2)}`);
        break;

      case 'трикутник':
        const a = getNumericValue('Введіть довжину першої сторони трикутника:');
        if (a === null) {
          alert('Розрахунок обчислення площі та периметру трикутника скасовано користувачем.');
          break;
        }

        const b = getNumericValue('Введіть довжину другої сторони трикутника:');
        if (b === null) {
          alert('Розрахунок обчислення площі та периметру трикутника скасовано користувачем.');
          break;
        }

        const c = getNumericValue('Введіть довжину третьої сторони трикутника:');
        if (c === null) {
          alert('Розрахунок обчислення площі та периметру трикутника скасовано користувачем.');
          break;
        }

        result = calculateTriangleAreaAndPerimeter(a, b, c);
        alert(`Площа трикутника: ${result.area.toFixed(2)}\nПериметр трикутника: ${result.perimeter.toFixed(2)}`);
        break;

      default:
        alert('Невідома фігура. Будь ласка, виберіть коло, прямокутник або трикутник.');
        continue;
    }
  }
};

calculateGeometry();
