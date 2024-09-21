"use strict";

let evaluations = [4, 1, 23, 45, 3, 2, 65, 43, 21, 44];
let evaluation = Number(prompt('Введіть оцінку'));
evaluations.push(evaluation);

function averageEvaluation(arr) {
    let sum = 0;
    for(const value of arr){
        sum+=value;
    }
    return (sum/arr.length).toFixed(2);
}

function maxEvaluation(arr) {
    return Math.max(...arr);

}

function minEvaluation(arr) {
    return Math.min(...arr);
}

let avg = averageEvaluation(evaluations);
let max = maxEvaluation(evaluations);
let min = minEvaluation(evaluations);

alert(`Середний бал = ${avg}, найвища оцінка = ${max}  найнижча оцінка = ${min}`);

