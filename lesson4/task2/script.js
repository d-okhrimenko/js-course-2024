
let ask;
let result = 0;
let operand;
let random1;
let random2;

function randoMizer() {
   
     random1 = Math.floor(Math.random() * 10) + 1;
     random2 = Math.floor(Math.random() * 10) + 1;
     let operands = ['+', '-', '*', '/']



    let randomOper = Math.floor(Math.random() * operands.length); //operands.length);
     operand = operands[randomOper];



    //let result = 0;

    switch (operand) {
        case '+':
            result = random1 + random2; break;
        case '-':
            result = random1 - random2; break;
        case '/':
            result = random1 / random2; break;
        case '*':
            result = random1 * random2; break;
        
    }
   
    ask = +prompt("Введіть відповідь: " + random1 + " " + operand + " " + random2)
   
}
randoMizer()
//let ask = +prompt("Введіть відповідь: " + random1 + " " + operand + " " + random2)
let userCount = document.getElementById("user")

//check answers
let count = 0;

function checkAnswers() {
    if (ask == result) {
        alert("Вітаю! Ви впоралися")
        count++
      
        //randoMizer()
    } else {
        alert(`Відповідь невірна. Правильна:  ${result}`)
        count = 0
       
        randoMizer()
        
    }
    userCount.innerHTML += count;
}
checkAnswers()




console.log(operand)
console.log(random1) 
console.log(random2)
console.log(result.toFixed(2))
