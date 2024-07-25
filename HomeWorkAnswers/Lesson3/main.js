document.querySelector("#bTn").onclick = function() {
    inputSomeValue();
}

function inputSomeValue(){

    let checkNumber = document.querySelector("#numInput").value; 
    if (isNaN(checkNumber)){
        alert("Це не число :( Спробуйте знову")
    }
    else if (Number(checkNumber)===0){
        alert("Спробуйте знову");  
    }
    else{
        if(Number(checkNumber)%2===0){
            alert("Число парне");  
        }
        else{
            alert("Число не парне");
        }
    }
}