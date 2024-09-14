function defineIMTcategory(mass, height) {
    let imt = mass / (height * height);

    let category;
    if (imt < 18.5)
        category = "Недостатня вага"
    else if (imt < 24.9)
        category = "Нормальна вага"
    else if (imt < 29.9)
        category = "Надмірна вага"
    else if (imt >= 29.9)
        category = "Ожиріння"
    else
        category = "щось пішло не так"

    let result = {
        'imt': imt,
        'category': category
    }
    return result
}

document.querySelector("#btn-t1").onclick = function () {
    let m = parseFloat(document.querySelector("#t1-mass").value);
    let h = parseFloat(document.querySelector("#t1-height").value);
    let res = defineIMTcategory(m, h);
    alert(`ІМТ=${res["imt"]}\nКатегорія: ${res["category"]}`);
}