
  
let ask = prompt("Введіть фігуру коло, трикутник чи прямокутник")

let arr2 = []
let arr3 = []



if (ask == "коло") {
    let ask1 = prompt("Введіть радіус")

} else if (ask == "прямокутник") {
     let ask2 = prompt("Введіть довжину і ширину")
    arr2 = ask2.split(' ')
    //console.log(ask2)
    console.log(arr2)

} else if (ask == "трикутник") {
    let ask3 = prompt("Введіть довжини трьох сторін")
    //console.log(ask3)
    arr3.push(ask3)
}  

function calcCircle() {
    
}

function calcRectangle() {
    
}

function calcTriangle() {
    
}