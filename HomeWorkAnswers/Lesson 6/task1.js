let inputGrades = prompt("Put the grades from 0 to 100, splitting with coma");
let grades = inputGrades.split(",").map(Number);

// find average grade
function findAverage(array) {
    let average = 0;

    for (let i = 0; i < array.length; i++) {
        average += array[i] / array.length;
    }
    return average.toFixed(1);
}
const averageGrade = findAverage(grades)
console.log(averageGrade);

// find the highest grade
function findMax(array) {
    return Math.max(...array)
}
const maxGrade = findMax(grades);
console.log(maxGrade);

// find the lowest grade
function findMin(array) {
    return Math.min(...array)
}
const minGrade = findMin(grades)
console.log(minGrade);

alert(`The highest grade is ${maxGrade}\nThe lowest grade is ${minGrade}\nThe averege grade is ${averageGrade}`);
