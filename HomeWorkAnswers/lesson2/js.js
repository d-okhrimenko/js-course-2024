document.querySelector("#btn1").onclick = function () {
    let d = new Date();
    let text2 = document.querySelector("#text2");
    text2.innerHTML = d;
    console.log(d);
    alert(d);
}
document.querySelector("#btn2").onclick = function () {
    alert("Привіт, Оксана");
}