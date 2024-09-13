document.querySelector("#btn-t1").onclick = function () {
            let num = prompt("Введіть число")
            alert(num % 2 == 0 ? "Число парне" : "Число НЕ парне")
        }