let calcIMT = (weight, height) => weight / Math.pow(height / 100, 2);
let categorIMT = (calcIMT) => {
    if (calcIMT < 18.5) return "Недостатня вага";
    else if (calcIMT < 24.9 && calcIMT >= 18.5)
        return "Нормальна вага";
    else if (calcIMT < 29.9 && calcIMT >= 25)
        return "Надмірна вага";
    else return "Ожиріння";
};

let weightUser = getValue("Введіть вагу");
let heightUser = getValue("Введіть зріст");
alert(categorIMT(calcIMT(weightUser, heightUser)));