console.log("index_3.html")

const button = document.querySelector("#btn")

button.addEventListener('click', function() {
  let userInput = document.querySelector("#input").value
  if(isNaN(userInput) || userInput.trim() == "") {
    alert("Це не число!")
  } else {
    userInput % 4 == 0 ? alert("Високосний рік") : alert("НЕ Високосний рік")
  }
})