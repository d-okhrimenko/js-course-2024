let numberOfGrades = 10;
let grades = [];

for (let i = 0; i < numberOfGrades; i++) {
    let grade = Math.floor(Math.random() * 100) + 1;
    grades.push(grade);
}
let gradesList = document.getElementById("gradesList");
for (let i = 0; i < numberOfGrades; i++) {
    let grade = document.createElement("li");
    grade.textContent = grades[i];
    gradesList.appendChild(grade);
}

function analizeGrades() {
    function calculateAverage(grades) {
        let sum = grades.reduce((acc, grade) => acc + grade, 0);
        let averageBal = sum / grades.length;
        return averageBal;
    }

    function findMax(grades) {
        let maxBal = 0;
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] > maxBal) {
                maxBal = grades[i];
            }
        }
        return maxBal;
    }

    function findMin(grades) {
        let minBal = 100;
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] < minBal) {
                minBal = grades[i];
            }
        }
        return minBal;
    }

    let average = calculateAverage(grades);
    let max = findMax(grades);
    let min = findMin(grades);

    alert(
        `Середній бал: ${average.toFixed(
            2
        )}\nНайбільший бал: ${max}\nМінімальний бал: ${min}`
    );

    document.getElementById("grade").textContent = average.toFixed(2);
    document.getElementById("max").textContent = max;
    document.getElementById("min").textContent = min;
}

document.querySelector(".btn").onclick = function () {
    analizeGrades();
};
