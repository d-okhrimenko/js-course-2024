function getGreating(userName) {
    return `Hello ${userName}! Have a nice day!`;
}

document.querySelector("#btn-say").onclick = function() {
    let output = document.querySelector("#greating");
    let userName = "Oksana";
    output.innerHTML = getGreating(userName);
    output.style.color = "blue";
}