let mark = [];

        let arrayAvg = array => {
            let sum = 0;

            for (const value of array) {
                sum += value;
            }

            let avg = Math.round(sum / array.length);
            return avg;
        }

        let arrayMax = array => {
            return Math.max(...array);
        }

        let arrayMin = array => {
            return Math.min(...array);
        }

        let getNumericValue = message => {
            while (true) {
                let value = prompt(message);
                let isValid = !isNaN(value) && value !== "" && value !== null && value >= 0 && value <= 100;
                if (isValid) {
                    return Number(value);
                } else {
                    alert("Невірне значення, повторіть спробу.");
                }
            }
        }

        let attempts = 5;

        for (let i = 1; i <= attempts; i++) {
            let value = getNumericValue(`Введіть оцінку для учня ${[i]}`);
            mark.push(value);
        }

        let min = arrayMin(mark);
        let max = arrayMax(mark);
        let avg = arrayAvg(mark);

        alert(` Найвищий бал: ${max}\n Найнижчий бал: ${min}\n Середній бал: ${avg}`);