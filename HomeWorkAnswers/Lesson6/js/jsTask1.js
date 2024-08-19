function calculateAverageScore(...arrayEvaluations) {
    let countEvaluations = arrayEvaluations.length;
    let sum = 0;
    for (const element of arrayEvaluations) {
        sum += element
    }
    return sum / countEvaluations;
}

let maxScore = (...arrayEvaluations) => Math.max(...arrayEvaluations);

let minScore = (...arrayEvaluations) => Math.min(...arrayEvaluations);

let studentEvaluations = [];

let userInput = prompt("Введіть оцінки через пробіл").trim().split(' ');

userInput.forEach(element => {
    let current = parseInt(element);
    studentEvaluations.push(current);
});

alert(`Середній бал - ${calculateAverageScore(...studentEvaluations)}
        Найвища оцінка - ${maxScore(...studentEvaluations)}
        Найнижча оцінка - ${minScore(...studentEvaluations)}`)