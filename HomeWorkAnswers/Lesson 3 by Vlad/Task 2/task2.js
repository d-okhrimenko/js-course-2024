document.querySelector("#btnDay").onclick = function() {
    let day = new Date();
    showResult (day);
}
function showResult(day) 
        {
            let output = document.querySelector("#output");
            output.innerHTML = result;
        }