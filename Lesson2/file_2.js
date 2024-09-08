console.log(new Date())

document.querySelector("#btn").onclick = function() {
  let output = document.querySelector("#text");
  output.style.color = "green";
  
  alert(new Date())
}