const itemForChoice = document.querySelectorAll(".choice-box__list-var li");
let userSelection = null;
let countUserWin = 0,
  countComputerWin = 0;


itemForChoice.forEach(item => {
  item.addEventListener('click', () => {
    // Clear previous selection
    itemForChoice.forEach(i => i.classList.remove('selected'));

    // Hightlight the selected item
    item.classList.add('selected');

    // Store the user`s selection
    userSelection = item.dataset.item;
    console.log('Ваш вибір '+userSelection);

    // Perform random selection
    randomSelecion();
  });

});

function randomSelecion() {
  // Randomly selection from 3 images by computer
  const randomItem = Math.floor(Math.random() * 3);

  // Show the computer choice
  const computerChoice = document.getElementById('computer-choice');
  let listImgFile = ['stone.png','scissor.png','paper.png'];
  computerChoice.src = listImgFile[randomItem];
  computerChoice.classList.remove('choice-box__pict_hidden');
  console.log("комп'ютер обрав " + randomItem);
  
  
  // Compare with user`s selection and show result game
  let result = document.getElementById('result');
  result.classList.remove('_hidden');
  let counterUserWin = document.getElementById('count-user-win');
  let counterComputerWin = document.getElementById('count-computer-win');

  if (userSelection == randomItem) {
    result.innerHTML = "Нічія";
    countUserWin += 0.5;
    counterUserWin.innerHTML = countUserWin;
    countComputerWin += .5;
      counterComputerWin.innerHTML = countComputerWin;
    // нічія
  } else {
    if ((userSelection == 0 && randomItem == 1) || (userSelection == 1 && randomItem == 2) || (userSelection == 2 && randomItem == 0)) {
      // виграш юзера
      result.innerHTML = "Ви виграли!";
      countUserWin ++;
      counterUserWin.innerHTML = countUserWin;
  } else {
      // програш юзера
      result.innerHTML = "Ви програли";
      countComputerWin ++;
      counterComputerWin.innerHTML = countComputerWin;
  }}
}