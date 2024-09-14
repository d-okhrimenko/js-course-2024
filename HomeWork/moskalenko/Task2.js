function calcCircle(r) {
    let P = 2 * Math.PI * r;
    let S = Math.PI * Math.pow(r, 2);
    return {
        'P': P,
        'S': S
    }
}

function calcRecrangle(a, b) {
    let P = 2 * (a + b);
    let S = a * b;
    return {
        'P': P,
        'S': S
    }
}

function calcTriangle(a, b, c) {
    let P = a + b + c;
    let p = P / 2;
    let S = Math.pow((p * (p - a) * (p - b) * (p - c)), 0.5);
    return {
        'P': P,
        'S': S
    }
}

document.querySelector("#btn-t2").onclick = function () {
    let res;
    if (document.querySelector("#t2-circle").checked) {
        let r = parseFloat(prompt("Радіус кола="))
        res = calcCircle(r)
    } else if (document.querySelector("#t2-rect").checked) {
        let a = parseFloat(prompt("Сторона прямокутника 1="))
        let b = parseFloat(prompt("Сторона прямокутника 2="))
        res = calcRecrangle(a, b)
    } else if (document.querySelector("#t2-triag").checked) {
        let a = parseFloat(prompt("Сторона трикутника 1="))
        let b = parseFloat(prompt("Сторона трикутника 2="))
        let c = parseFloat(prompt("Сторона трикутника 3="))
        res = calcTriangle(a, b, c)
    }
    alert(`P = ${res["P"]}\nS = ${res["S"]}`)
}