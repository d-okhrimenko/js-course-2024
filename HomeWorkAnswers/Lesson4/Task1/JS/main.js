window.addEventListener("load", () => {
  let btn = document.querySelector("#btn");
  let blokCOmp = document.querySelector(".block_comp");

  btn.addEventListener("click", () => {
    let randomValue = Math.floor(Math.random() * 3 + 1);
    let comp = document.querySelector("#comp");
    let srcImg = `./IMG/choice${randomValue}.jpg`;
    comp.src = srcImg;
    console.log(comp.src);
    console.log(randomValue);
  });
});
