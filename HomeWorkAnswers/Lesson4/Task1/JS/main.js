window.addEventListener("load", () => {
  let btn = document.querySelector("#btn");
  let userChoiceBlock = document.querySelector(".forUserCHoice");
  let user = document.querySelector("#user");
  let comp = document.querySelector("#comp");
  let compResult = document.querySelector("#compResult");
  let userResult = document.querySelector("#userResult");
  let userCount = 0;
  let compCount = 0;
  let userIndexChoice, compIndexChoice;

  userChoiceBlock.addEventListener("click", (e) => {
    let adress = e.target.src;
    user.src = adress;
    userIndexChoice = getNumberOfImage(adress);
  });

  btn.addEventListener("click", () => {
    let randomValue = Math.floor(Math.random() * 3 + 1);
    let srcImg = `./IMG/choice${randomValue}.jpg`;
    comp.src = srcImg;
    compIndexChoice = getNumberOfImage(srcImg);
    setTimeout(() => {
      let result = getWinner(compIndexChoice, userIndexChoice);
      if (result === 1) {
        comp.src = "./IMG/loser.jpg";
        user.src = "./IMG/winner.jpg";
        userCount ++;
        userResult.innerHTML = userCount;
      } else if (result === 0) {
        comp.src = "./IMG/winner.jpg";
        user.src = "./IMG/loser.jpg";
        compCount ++;
        compResult.innerHTML = compCount;
      } else {
        comp.src = "./IMG/try.jpg";
        user.src = "./IMG/try.jpg";
      }
    }, 1000);
  });
});

function getNumberOfImage(src) {
  let regex = /\d+/g;
  let value = src.match(regex);
  let result = value[value.length - 1];
  return Number(result);
}

function getWinner(compValue, userValue) {
  let result;

  if (
    (compValue === 1 && userValue === 2) ||
    (compValue === 2 && userValue === 3) ||
    (compValue === 3 && userValue === 1)
  ) {
    result = 0;
  } else if (
    (userValue === 1 && compValue === 2) ||
    (userValue === 2 && compValue === 3) ||
    (userValue === 3 && compValue === 1)
  ) {
    result = 1;
  } else {
    result = 2;
  }
  return result;
}
