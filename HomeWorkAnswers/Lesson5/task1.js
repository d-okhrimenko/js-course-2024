let weight = +prompt("Яка ваша вага?");
let height = +prompt("Який ваш зріст?");

function calculateIMT(weight, height){
    return weight / Math.pow( height/100, 2 );
}

function getConclusion(indexIMT){
    if (indexIMT < 18.5){
        return "У вас недостатня вага";
    } 
    else if(indexIMT < 24.9){
        return "У вас нормальна масса тіла";
    }  
    else if (indexIMT < 29.9){
        return "У вас зайва вага";
    }
    else{
        return "У вас ожиріння";
    }
}

let indexIMT = calculateIMT(weight, height);
let conclusion = getConclusion1(indexIMT);

alert(`Індекс маси тіла - ${indexIMT}`);
alert(conclusion);