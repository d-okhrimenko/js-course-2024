function circle(r) {
    let area = Math.PI * Math.pow(r, 2);
    let length = 2 * Math.PI * r;
    alert(
      "Довжина кола " + length.toFixed(1) + " Площа кола " + area.toFixed(1)
    );
}
function rectangle(l, w) { 
    let area = l * w;
    console.log(l, w)
    let perimeter = (l + w) * 2;
    console.log(l+w);
    alert("Периметр прямокутника " + perimeter + " Площа прямокутника " + area);
}
function triangle(a, b, c) {
    let perimeter = a + b + c;
    let p = (a + b + c) / 2;
    let area = Math.pow((p * (p - a) * (p - b) * (p - c)), 1 / 2);
    alert("Периметр трикутника " + perimeter + " Площа трикутника " + area.toFixed(1));
}
function circParameters() {
    let radius = Number(prompt("Введіть радіус у см"));
    circle(radius);
}
function recParameters() {
    let length = Number(prompt("Введіть довжину у см"));
    let width = Number(prompt("Введіть ширину у см"));
    rectangle(length, width);
}
function triaParameters() {
    let a = Number(prompt("Введіть довжину першої сторони у см"));
    let b = Number(prompt("Введіть довжину другої сторони у см"));
    let c = Number(prompt("Введіть довжину третьої сторони у см"));
    triangle(a, b, c);
}