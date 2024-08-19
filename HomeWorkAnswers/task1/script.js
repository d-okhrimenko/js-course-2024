function averageMark(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return (sum / numbers.length).toFixed(1)
}

let maxMark = numbers => Math.max(...numbers);
let minMark = numbers => Math.min(...numbers);


let numbers = prompt("Введіть оцінки через пробіл:")
numbers = numbers.split(" ").map(Number)

alert(`${averageMark(numbers)}, ${maxMark(numbers)}, ${minMark(numbers)}`)
document.getElementById("output").textContent = `Середнє: ${averageMark(numbers)}. Максимальне: ${maxMark(numbers)}. Мінімальне: ${minMark(numbers)}`