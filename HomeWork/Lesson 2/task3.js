let field_hello_message = document.querySelector("#field_hello_message");
let button_hello_message = document.querySelector("#button_hello_message");
// Наразі хардкорно задам ім'я корстувача
let user_name = 'Volodymyr'

button_hello_message.onclick = function() {
    field_hello_message.innerText = `Привіт ${user_name}!`;
}