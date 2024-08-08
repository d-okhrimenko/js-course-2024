let getGuesture;
do {
    getGuesture = prompt('Choose a guesture!\nNo letters!\nFor scisors enter 1.\nFor paper enter 2.\nFor rock enter 3.'); //asking a user to enter aguesture
    getGuesture = parseInt(getGuesture); //parsing the entered value to the number
    getGuesture = Math.round(getGuesture, 0); // rounding the number to reduce number of issues


    // checking if the number is correct
    if (isNaN(getGuesture)) {
        alert('You entered incorrect symbols!');
    }
    else if (getGuesture < 0) {
        alert(`The number ${getGuesture} is less than 0. Please enter a number greater than 0.`);
    } else if (getGuesture === 0) {
        alert(`The number ${getGuesture} equals 0. Please enter a number greater than 0.`);
    }
} while (getGuesture >= 4);

// generating random number max 3.
let randomNumber = Math.floor(Math.random() * 3) + 1;
randomNumber = Math.round(randomNumber, 0);

//just for visualization
console.log(getGuesture);
console.log(randomNumber);

// assignung numbers to guestures
if (getGuesture == 1) {
    alert('You have Scisors');
}
else if (getGuesture == 2) {
    alert('You have Paper');
}
else if (getGuesture == 3) {
    alert('You have Rock');
}

// asssigning random numbers 
if (randomNumber == 1) {
    alert('Computer has Scisors');
}
else if (randomNumber == 2) {
    alert('Computer has Paper');
}
else if (randomNumber == 3) {
    alert('Computer has Rock');
}

// detecting a winner
if (getGuesture === randomNumber){
    alert ('Even');
}
else if(
    ( getGuesture === 3 && randomNumber === 1) ||
    ( getGuesture === 1 && randomNumber === 2) ||
    (getGuesture === 2 && randomNumber === 3) 
){
    alert('You won!');
}
else {
    alert ('You lost!');
}

