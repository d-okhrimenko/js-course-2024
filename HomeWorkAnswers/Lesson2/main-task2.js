// / alert(new Date());
// console.log(new Date());

document.querySelector("button").onclick = function () {
  document.querySelector("p").innerHTML = new Date();
};
