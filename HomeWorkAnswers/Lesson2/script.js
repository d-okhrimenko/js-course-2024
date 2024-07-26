const myFirstName = 'Sasha';
const myLastName = 'Bezdolia';

const outputGreetings = document.querySelector('#greetingsToUser');
const outputCurrentDate = document.querySelector('#currentDate');
const buttonShowGreetings = document.querySelector('#showGreetingsToUser');
const buttonShowCurrentDate = document.querySelector('.showCurrentDate');


buttonShowGreetings.onclick = (() => {
  if(myFirstName && myLastName) {
    outputGreetings.innerHTML = `Hello ${myFirstName} ${myLastName}`;
  } else {
    outputGreetings.innerHTML = `Hello new user`;
  }
  buttonShowGreetings.style.display = 'none';
})


buttonShowCurrentDate.onclick = (() => {
  outputCurrentDate.innerHTML = 'Current date is ' + new Date();
  buttonShowCurrentDate.style.display = 'none';
})
