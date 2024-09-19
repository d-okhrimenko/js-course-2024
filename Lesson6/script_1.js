console.log('index_1.html')

let array = [];

let randomNumber = () => Math.floor(Math.random() * 101);
let isValidNumberRange = (input) => input >= 1 && input <= 100;
let isValidNumber = (input) => typeof input === 'string' && input.trim() !== '' && !isNaN(input)

// Додаю до мого масиву 20 рандомних очінок від 1 до 100 включно.
for (let i = 0; i < 20; i++) {
  array.push(randomNumber());
}

function gpa(arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (sum / arr.length).toFixed(2);
}

let max = (arr) => Math.max(...arr)
let min = (arr) => Math.min(...arr)

// Двічи прошу користувача ввести оцінки.
for (let i = 0; i < 2; i++) {
  while(true) {
    let userNumber = prompt('Введіть оцінку від 1 до 100 включно')
    if(isValidNumber(userNumber) && isValidNumberRange(userNumber)) {
      userNumber = Math.floor(Number(userNumber))
      array.push(userNumber)
      break
    } else {
      alert('Введіть корктну оцінку!')
    }
  }
}

alert(`Наш масив: ${array}\nНайнища оцінка: ${min(array)}\nНайвища оцінка: ${max(array)}\nСередній бал: ${gpa(array)}`)

console.log(array)
console.log(gpa(array))
console.log(max(array))
console.log(min(array))
