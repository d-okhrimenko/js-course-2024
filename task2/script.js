let ask = prompt("Введіть фігуру коло, трикутник чи прямокутник")

let arr2 = []
let arr3 = []
let ask1, ask2, ask3;
//let square, perimetr;

     if (ask == "трикутник") {
    ask3 = prompt("Введіть три сторони через пробіл")
     
     arr3 = ask3.split(" ");
        console.log(arr3);
      
        calcTriangle()
    
   } else if (ask == "прямокутник") {
     ask2 = prompt("Введіть довжину, ширину")
         
    arr2 = ask2.split(" ");
         console.log(arr2);
 
      calcRectangle() 

} else if (ask == "коло") {
    ask1 = prompt("Введіть радіус")
    console.log(ask1);
    calcCircle()

} else {
        alert("Некоректне введення")
}



function calcCircle() {
      let circSquare = Math.round(Math.PI * ask1 ** 2) 
      let circPerimetr = Math.round(2 * Math.PI * ask1)
    alert(`Площа дорівнює: ${circSquare}, периметр дорівнює: ${circPerimetr}`);
}

function calcRectangle() {
   
    let reckSquare = Math.round(Number(arr2[0]) * Number(arr2[1]));
    let reckPerimetr = 2 * (Number(arr2[0]) + Number(arr2[1]));
    alert(`Площа дорівнює: ${reckSquare}, периметр дорівнює: ${reckPerimetr}`);
    
}

function calcTriangle() {
    
    let p = (Number(arr3[0]) + Number(arr3[1]) + Number(arr3[2])) / 2; 
    let triaSquare = Math.round(Math.sqrt(p * (p - Number(arr3[0])) * (p - Number(arr3[1])) * (p - Number(arr3[2]))));
     let triaPerimetr = Number(arr3[0]) + Number(arr3[1]) + Number(arr3[2]); 
    alert(`Площа дорівнює: ${triaSquare}, периметр дорівнює: ${triaPerimetr}`);
    
}
