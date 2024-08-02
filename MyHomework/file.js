let btn = document.querySelector("#btn");
let nameBtn = document.querySelector("#nameBtn");
let output = document.querySelector("#output");
let div = document.querySelector("#div");

btn.onclick = function(){
    output.innerHTML = new Date().toLocaleString();
    output.style.color = "green";
};
nameBtn.onclick = function(){
  div.innerHTML = "Привіт Тетяна";
  div.style.color = "orange";
};
