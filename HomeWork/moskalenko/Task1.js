function RSPGame(player) {
    let items = {
        1: "Камінь",
        2: "Ножиці",
        3: "Папір"
    }

    computer = parseInt(Math.random() * 100) % 3 + 1


    if (player == computer)
        alert(`Нічия!\n${items[player]} в обох.`)
    if (player - computer == 1 || computer - player == 2)
    {
        alert(`Ви програли =(\n${items[computer]} перемагає ${items[player]}`)
        document.querySelector("#computer-score").textContent++
    }
    if (computer - player == 1 || player - computer == 2)
    {
        alert(`Ви виграли!\n${items[player]} перемагає ${items[computer]}`)
        document.querySelector("#player-score").textContent++
    }
    console.log(player, computer)
}

document.querySelector("#btn-t1-rock").onclick = function () {
    RSPGame(1)
}

document.querySelector("#btn-t1-scissors").onclick = function () {
    RSPGame(2)
}

document.querySelector("#btn-t1-paper").onclick = function () {
    RSPGame(3)
}