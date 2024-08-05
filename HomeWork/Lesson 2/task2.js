document.querySelector("#btn").onclick = function() {
    let output = document.querySelector("#output");
    let name = prompt();
    output.innerHTML = "Hello " + name;
}