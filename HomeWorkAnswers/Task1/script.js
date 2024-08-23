function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

function findHighestGrade(grades) {
  return Math.max(...grades);
}

function findLowestGrade(grades) {
  return Math.min(...grades);
}

function analyzeGrades() {
  const gradesInput = prompt(
    "Enter the grades separated by commas:",
    "75, 88, 92, 60, 85"
  );
  const grades = gradesInput.split(",").map(Number);

  if (grades.some(isNaN)) {
    alert("Please enter valid numbers separated by commas.");
    return;
  }

  const averageGrade = calculateAverage(grades).toFixed(2);
  const highestGrade = findHighestGrade(grades);
  const lowestGrade = findLowestGrade(grades);

  document.getElementById(
    "result"
  ).textContent = `Average Grade: ${averageGrade}, Highest Grade: ${highestGrade}, Lowest Grade: ${lowestGrade}`;
}

document
  .getElementById("analyzeButton")
  .addEventListener("click", analyzeGrades);
