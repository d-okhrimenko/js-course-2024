let curDate = new Date();
let dateTime; 
let name = "Nadia"
function date() {
     dateTime = "Поточна дата: " + curDate.getDate() + "." + "0" +
        (curDate.getMonth() + 1) + "/" + curDate.getHours() + ":" + curDate.getMinutes()
    alert(dateTime)
}

let button = document.getElementById("btn"); 
button.addEventListener("click", function () {

    date();
    alert(`Привіт, ${name}`)
    
})