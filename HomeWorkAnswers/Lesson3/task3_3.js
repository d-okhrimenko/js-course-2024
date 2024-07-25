document.querySelector("#bTn").onclick = function(){
checkYear();
}

function checkYear(){
    let checkNumber = document.querySelector("#inputYear").value; 
    if (isNaN(checkNumber)){
        alert("Введено не число :( Спробуйте знову")
    }
    else if (Number(checkNumber)==0){
        alert("Поле не заповнено або рік не може дорівнювати 0\nСпробуйте знову");  
    }
    else{
        if(Number(checkNumber)%4==0){
            alert("Рік " + checkNumber + " - високосний");  
        }
        else{
            alert("Рік " + checkNumber + " - не високосний");  
        }
    }
}