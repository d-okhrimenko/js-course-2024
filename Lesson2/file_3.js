console.log('index_3.html')

document.querySelector("#btn").onclick = function(){
  let name = 'Dan'
  let output = document.querySelector("#text")
  output.innerHTML = `Привіт ${name}`
}