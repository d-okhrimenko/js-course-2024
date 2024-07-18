document.querySelector("#btn").onclick = function () {
    let date = new Date();
    let outputDate = `Current date is: ${date}`
    document.querySelector("#output").innerHTML = outputDate;
    //console.log(date);
}
