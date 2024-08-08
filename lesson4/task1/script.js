let userCount = document.getElementById("userCount")
let compCount = document.getElementById("compCount")

let ask = prompt("Введіть камінь, ножиці чи папір");

let userArr = ask;




console.log(userArr)
const arr = ["камінь", "ножиці", "папір"];
//arr.toString()


    let random = Math.floor(Math.random()*arr.length)  
let answer = (arr[random])
console.log(answer)
alert(answer)
    
let userSum = 0;
let compSum = 0;


if (ask == "" || ask == null || !isNaN(ask)) {
    alert("Вихід з гри")
}
else {
    


    function result() {
     

        
        if (userArr == "камінь" && answer == "ножиці") {
            alert("Користувач виграв")
            userSum++
            userCount.textContent += "1"
          
        } else if (userArr == "ножиці" && answer == "папір") {
            alert("Користувач виграв")
            userSum++
            userCount.textContent += "1"
        } else if (userArr == "папір" && answer == "камінь") {
            alert("Користувач виграв")
            userSum++
            userCount.textContent += "1"
        }
        else if (userArr === answer)
            alert("нічия");
        else {
            alert("Комп'ютер виграв")
            compSum++
            compCount.textContent += '1'
        }
    }
    compCount.textContent += compSum;
    userCount.textContent += userSum;
     result()
}
   

