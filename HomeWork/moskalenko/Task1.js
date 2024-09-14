function marks_avg(marks) {
    const average = arr => arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
    return average(marks)
}

function marks_max(marks) {
    return Math.max(...marks)
}

function marks_min(marks) {
    return Math.min(...marks)
}

function show_data(marks) {
    let avg = marks_avg(marks);
    let min = marks_min(marks);
    let max = marks_max(marks);

    document.querySelector("#t1-marks").textContent = marks
    document.querySelector("#t1-desc").textContent = `Середня оцінка: ${avg}\nНайменша оцінка: ${min}\nНайбільша оцінка: ${max}`;
}

document.querySelector("#btn-t1-rnd").onclick = function () {
    let marks = []
    let n = 20;
    for (let i = 0; i < n; i++) {
        marks.push(parseInt(Math.random() * 100));
    }

    show_data(marks)   
}

document.querySelector("#btn-t1-own").onclick = function () {
    let marks = []
    let input = prompt("Введіть оцінки через кому")
    for (const mark of input.split(separator=",")) {
        marks.push(parseInt(mark));
    }

    show_data(marks)   
}