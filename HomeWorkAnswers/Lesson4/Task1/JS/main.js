window.addEventListener("load", () => {
  let btn = document.querySelector("#btn");
  // let blokComp = document.querySelector(".block_comp");
  // let blockUser = document.querySelector(".block_user");
  let userChoiceBlock = document.querySelector(".forUserCHoice");
  let user = document.querySelector("#user");
  let comp = document.querySelector("#comp");

  userChoiceBlock.addEventListener("click", (e) => {
    let adress = e.target.src; 
    user.src = adress;
  });
  btn.addEventListener("click", () => {
    let randomValue = Math.floor(Math.random() * 3 + 1);
    let srcImg = `./IMG/choice${randomValue}.jpg`;
    comp.src = srcImg;
    setTimeout(()=> {
      comp.src = "./IMG/loser.jpg";
      user.src = "./IMG/winner.jpg";
    },1000);
  });
});
