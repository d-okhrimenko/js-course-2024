let list = []

function renew_data(list) {

    document.querySelector("#t2-list").innerHTML = list.join("<br />");
}

function add_item(newItem) {
    list.push(newItem)
}

function del_item(nameToDel) {
    let index = list.indexOf(nameToDel);
    while (index != -1) {
        list.splice(index, 1)
        index = list.indexOf(nameToDel)
    } 
}

document.querySelector("#btn-t2-add").onclick = function () {
    let newItem = prompt("Введіть назву нового товару");
    add_item(newItem);
    renew_data(list);
}

document.querySelector("#btn-t2-del").onclick = function () {
    let delItem = prompt("Введіть назву товару для видалення");
    del_item(delItem);
    renew_data(list);
    // В такому форматі як в мене не бачу сенсу робити цикл дял користувача. Можна звернути увагу на функцію del_item, якщо протрібен саме цикл
}