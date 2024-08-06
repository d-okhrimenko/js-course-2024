document.querySelector("#btn").onclick = function() {
    let entYear = Number(document.querySelector("#year").value);
    let year1 = "Цей рік є високосним", year2 = "Цeй рік не є високосним", notYear = "Ви ввели не число"; 
        if (isNaN(entYear)) {
            showRes(notYear);
        } else if ((entYear % 4 === 0) && (entYear % 100 !== 0)) {
            showRes(year1);
        } else if (entYear % 400 === 0) {
            showRes(year1);
        } else {
            showRes(year2);
        }
}
function showRes(result) {
    let output = document.querySelector("#output");
    output.innerHTML = result;
}