let input = prompt("Введіть ваш вибір:")

const versions = ["камінь", "ножиці", "папір"]
let computerVersion = versions[Math.floor(Math.random() * versions.length)]

if (input === versions[0] && computerVersion === versions[1]) {
    alert(`Ти вибрав ${input}, комп'ютер вибрав ${computerVersion}. Ти виграв!`)
} else if (input === versions[1] && computerVersion === versions[2]) {
    alert(`Ти вибрав ${input}, комп'ютер вибрав ${computerVersion}. Ти виграв!`)
} else if (input === versions[2] && computerVersion === versions[0]) {
    alert(`Ти вибрав ${input}, комп'ютер вибрав ${computerVersion}. Ти виграв!`)
} else if (input === computerVersion) {
    // нічия
    alert(`Ти вибрав ${input}, комп'ютер вибрав ${computerVersion}. Нічия!`)
} else {
    alert(`Ти вибрав ${input}, комп'ютер вибрав ${computerVersion}. Ти програв!`)
}