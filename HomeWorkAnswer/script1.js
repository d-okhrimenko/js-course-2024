"use strict";
let list_options = document.querySelector('.list_options');
let stone = document.querySelector('#stone');
let scissors = document.querySelector('#scissors');
let paper = document.querySelector('#paper');
let messege_result = document.querySelector(".message_result");
let content_game = document.querySelector(".content_game");
let result = document.querySelector(".message_all_result");
let point_user = 0, point_comp = 0, count = 0;
let text_won = "Ви виграли!";
let text_lost = "Ви програли!";
let text_draw = "Нічия!";
let select;

document.querySelector(".count").innerHTML = `${count}`;
document.querySelector(".point_user").innerHTML = `${point_user}`;
document.querySelector(".point_comp").innerHTML = `${point_comp}`;

function putMessage(comp, text) {
    return messege_result.innerHTML = `Комп'ютер обрав ${comp} \n ${text}`;
}

// ось тут змінюється колір блоку який обрали
list_options.onclick = function (event) {
    let div = event.target.closest('div');
    if (!div) return;
    if (select) {
        select.classList.remove('active');
    }
    select = div;
    select.classList.add('active');
}
// натискання на кнопку грати
document.querySelector("#btn_play").onclick = function () {
    count++;
    let select_comp = Math.floor(Math.random() * (3));
    // select_comp = 0 - відповідає камінь
    // select_comp = 1 - відповідає ножиці
    // select_comp = 2 - відповідає папір
    if (stone.classList.contains('active')) {
        if (select_comp == 0) {
            point_comp++;
            point_user++;
            putMessage('камінь', text_draw);
        } else if (select_comp == 1) {
            point_user++;
            putMessage('ножиці', text_won);
        } else {
            point_comp++;
            putMessage('папір', text_lost);
        }
    } else if (scissors.classList.contains('active')) {
        if (select_comp == 0) {
            point_comp++;
            putMessage('камінь', text_lost);
        } else if (select_comp == 1) {
            point_user++;
            point_comp++;
            putMessage('ножиці', text_draw);
        } else {
            point_user++;
            putMessage('папір', text_won);
        }
    } else if (paper.classList.contains('active')) {
        if (select_comp == 0) {
            point_user++;
            putMessage('камінь', text_won);
        } else if (select_comp == 1) {
            point_comp++;
            putMessage('ножиці', text_lost);
        } else {
            point_user++;
            point_comp++;
            putMessage('папір', text_draw);
        }
    } else {
        alert("Ви не зробили вибір :)");
    }
    document.querySelector(".count").innerHTML = `${count}`;
    document.querySelector(".point_user").innerHTML = `${point_user}`;
    document.querySelector(".point_comp").innerHTML = `${point_comp}`;
}
// натискання на кнопку завершити
document.querySelector("#btn_end").onclick = function () {
    content_game.remove();
    let text = `З рахунком ${point_user} | ${point_comp} `;
    if (point_user > point_comp) {
        result.innerHTML = `${text} ${text_won}`;
    } else if (point_user < point_comp) {
        result.innerHTML = `${text} ${text_lost}`;
    } else {
        result.innerHTML = `${text} ${text_draw}`;
    }
}
