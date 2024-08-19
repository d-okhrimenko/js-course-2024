//масив 

let randomArr = [];
 randomArr[0] = Math.floor(Math.random() * 100) + 1;
 randomArr[1] = Math.floor(Math.random() * 100) + 1;
 randomArr[2] = Math.floor(Math.random() * 100) + 1;

 console.log(randomArr)

let myArray = [70, 10, 90, 85] //масив оцінок студентів

function max(array){
return Math.max(...array);
}

console.log(max(randomArr))

function min(array){
    return Math.min(...array);
}
console.log(min(randomArr))

function avg(array){
    let sum = 0;
    for(const value of array){
        sum += value;
        
    }
    return sum / array.length; 
    
}
console.log(avg(randomArr))

alert (`Найвища оцінка ${max(randomArr)}, найнижча ${min(randomArr)}, середній бал ${(avg(randomArr)).toFixed(2)} `);

