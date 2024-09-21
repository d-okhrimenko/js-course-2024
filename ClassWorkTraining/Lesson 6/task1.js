let values = [10, 12- -8, 0, -10, 25, 158];

// let minValue = Infinity;
// for (let i = 0; i < values.length; i++) {
//     if (values[i] < minValue) {
//         minValue = values[i];
//     }
// }
// console.log(minValue);

// Min value
function min(array) {
    return Math.min(...array)
}
console.log(min(values));

// Max value
function max(array) {
    return Math.max(...array)
}
console.log(max(values));

// Sum of values
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
         sum += array[i];
    }
    return sum
}
console.log(sum(values));

