function spCircle(radius) {
    S1 = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    P1 = (2 * Math.PI * radius).toFixed(2);
    return S1, P1;
}

function spRectangle(length, width) {
    S2 = (length * width).toFixed(2);
    P2 = ((length + width) * 2).toFixed(2);
    return S2, P2;
}

function spTriangle(a, b, c) {
    p = (a + b + c) / 2;
    S3 = (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
    P3 = (a + b + c).toFixed(2);
    return S3, P3;
}

let figure = prompt("Введіть геометричну фігуру: коло, прямокутник або трикутник");

let circle = "коло";
let rectangle = "прямокутник";
let triangle = "трикутник";

if (figure == circle) {
    let radius = getNumericValue("Введіть радіус кола");
    spCircle(radius);
    alert("Площа кола = " + S1);
    alert("Периметр кола = " + P1);
    // console.log(S1);
    // console.log(P1);

} else if (figure == rectangle) {
    let length = getNumericValue("Введіть довжину прямокутника");
    let width = getNumericValue("Введіть ширину прямокутника");
    spRectangle(length, width);
    alert("Площа прямокутника = " + S2);
    alert("Периметр прямокутника = " + P2);
    // console.log(S2);
    // console.log(P2);
} else if (figure == triangle) {
    let a = getNumericValue("Введіть довжину першої сторони трикутника");
    let b = getNumericValue("Введіть довжину другої сторони трикутника");
    let c = getNumericValue("Введіть довжину третьої сторони трикутника");
    spTriangle(a, b, c);
    alert("Площа трикутника = " + S3);
    alert("Периметр трикутника = " + P3);
    // console.log(S3);
    // console.log(P3);
}





