let getValue=message=> {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null && value>0;
        if (isValid) return Number(value);
    }
}
let getValueText = message=>prompt(message);