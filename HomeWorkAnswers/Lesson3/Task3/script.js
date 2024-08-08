let button = document.querySelectorAll('#btn');
let input = document.querySelector('#year');
let result = document.querySelector('#result');
//Перевірка на високосність
document.querySelector("#btn").onclick = function () {
    let year = parseInt(input.value);
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        result.innerHTML = "Високосний рік";
    } else {
        result.innerHTML = "Невисокосний рік";
    }
}
//Обмеження
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (input.value !== '', input.value != 0) {
        } else {
            result.innerHTML = " ";
            alert("Заповніть поле валідними даними");
        }
    }
    )
}
input.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d.]/g, '');
    this.value = this.value.slice(0, 5);
}
)