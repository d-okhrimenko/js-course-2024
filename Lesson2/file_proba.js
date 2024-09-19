console.log('index_proba.html')

const button = document.querySelector("#btn")

const textButton = document.querySelector("#btnText")

button.addEventListener('click', replaceUp)

textButton.addEventListener('click', function() {
  if (textButton.textContent === "Text one" ) {
    textButton.textContent = "Text two"
  } else {
    textButton.textContent = "Text one"
  }
})

function replaceUp() {
  let name = 'Dan'
  let newText = document.createTextNode(`Hello ${name}`)
  button.parentNode.replaceChild(newText, button)
}
