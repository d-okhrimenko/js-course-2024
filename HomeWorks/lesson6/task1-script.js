let grades = [];

function addGrade() {
    const gradeInput = document.getElementById("gradeInput");
    const grade = parseInt(gradeInput.value);

    if (!isNaN(grade) && grade > 0 && grade <= 100) {
        grades.push(grade);
        gradeInput.value = '';
        updateGradeList();
        alert(`Оцінка ${grade} додана.`);
    } else {
        alert("Будь ласка, введіть коректну оцінку (від 1 до 100).");
    }
}

function generateRandomGrades() {
    const numberOfStudents = Math.floor(Math.random() * 11) + 20;
    grades = [];

    for (let i = 1; i < numberOfStudents; i++) {
        const randomGrade = Math.floor(Math.random() * 101);
        grades.push(randomGrade);
    }

    updateGradeList();
    alert(`Згенеровано оцінки для ${numberOfStudents} студентів.`);
}

function updateGradeList() {
    const gradeListElement = document.getElementById("gradeList");
    gradeListElement.innerHTML = '';

    grades.forEach((grade, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Студент ${index + 1}: ${grade}`;
        gradeListElement.appendChild(listItem);
    });
}

function calculateAverage(grades) {
    const sum = grades.reduce((a, b) => a + b, 0);
    return (sum / grades.length).toFixed(2);
}

function findHighestGrade(grades) {
    return Math.max(...grades);
}

function findLowestGrade(grades) {
    return Math.min(...grades);
}

function analyzeGrades() {
    if (grades.length === 0) {
        alert("Будь ласка, спочатку додайте оцінки або згенеруйте їх.");
        return;
    }

    const average = calculateAverage(grades);
    const highest = findHighestGrade(grades);
    const lowest = findLowestGrade(grades);

    document.getElementById("result").innerHTML = `
        <p>Середній бал: ${average}</p>
        <p>Найвища оцінка: ${highest}</p>
        <p>Найнижча оцінка: ${lowest}</p>
    `;
}
