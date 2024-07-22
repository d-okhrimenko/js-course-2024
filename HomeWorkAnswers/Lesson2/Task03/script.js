document.getElementById("say-hello").onclick = function(){
    const name = "Дмитро"
    let greeting = `Привіт, ${name}!`
    document.getElementById("greeting").innerHTML = greeting
}
