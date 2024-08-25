const studentGrades = [];

const getNumericValue = (message) => {
  while (true) {
    const value = prompt(message);
    const isValidValue = !isNaN(value) && value !== '' && value !== null;

    if (isValidValue) {
      return Number(value);
    }

    if (value === null) {
      return null;
    }

    if (value.toLowerCase() === 'auto') {
      return getRandomInt(1, 12);
    }
  }
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const calculateAverageScore = (grades) => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  const averageScore = sum / grades.length;

  return averageScore.toFixed();
};

const getHighestGrade = (grades) => {
  return Math.max(...grades);
};

const getLowestGrade = (grades) => {
  return Math.min(...grades);
};

const getStudentGrades = () => {
  while (true) {
    const grade = getNumericValue(
      'Введіть оцінку студента від 1 до 12.\nВведіть "auto" щоб згенерувати випадкове число.\nНатисніть "Скасувати" для завершення.'
    );

    if (grade === null) {
      break;
    }

    if (grade >= 1 && grade <= 12) {
      studentGrades.push(grade);
      console.log(studentGrades);
    }
  }
};

const analyzeGrades = () => {
  getStudentGrades();
  const averageScore = calculateAverageScore(studentGrades);
  const highestGrade = getHighestGrade(studentGrades);
  const lowestGrade = getLowestGrade(studentGrades);

  if (studentGrades.length > 0) {
    alert(
      `К-сть оцінок: ${studentGrades.length}\nСередній бал: ${averageScore}\nНайвищий бал: ${highestGrade}\nНайнижчий бал: ${lowestGrade}`
    );
  } else {
    alert('Скасовано користувачем');
  }
};

analyzeGrades();
