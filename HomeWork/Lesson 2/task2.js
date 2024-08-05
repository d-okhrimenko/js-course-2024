let field_current_date = document.querySelector("#field_current_date");
let button_current_date = document.querySelector("#button_current_date");

button_current_date.onclick = function() {
    let current_date = new Date()

    alert(current_date)
    console.log(`variable: current_date -> ${current_date}`)
    field_current_date.innerText = `Now current date is: ${current_date}`;
}