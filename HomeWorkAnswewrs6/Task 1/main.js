let studentScores = [];

for (let i = 0; i < 10; i++) {
    studentScores[i] = Math.floor(Math.random() * 100);
}

function findAvgScore(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    let avg = sum / array.length;
    return avg
}

function findHighestScore(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > max) {
            max = element
        }
    }
    return max;
}

function findLowestScore(array) {
    let min = 101;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < min) {
            min = element
        }
    }
    return min;
}

let avg = findAvgScore(studentScores);
let lowest = findLowestScore(studentScores);
let higher = findHighestScore(studentScores)

alert(`Avarage score is ${avg}. The highest score is ${higher}. The lowest score is ${lowest}.`);

