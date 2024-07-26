window.addEventListener("load", () => {
  document.querySelector("#btnResult").addEventListener("click", getResult);
});

function getValueFromUser() {
  let userValue = document.querySelector("#valueFromUser");
  let result = Number(userValue.value);
  userValue.value = null;
  return result;
}

function findAnEvenNumber(value){
  let stringResualt = "";
  if(value == 0){
   return "це Нуль!"
  }
  if(value % 2 == 0){
    stringResualt = `${value} це число парне`
  }else {
    stringResualt = `${value} це число не парне`
  }

  return stringResualt;
}

function getResult() {
  let value = getValueFromUser();
  let text = findAnEvenNumber(value);
  let result = document.querySelector("#result");
  result.innerHTML = text;
}
