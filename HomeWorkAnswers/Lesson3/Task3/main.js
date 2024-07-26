window.addEventListener("load", () => {
  let btn = document.querySelector("#btn");
  let textResult = document.querySelector("#result");
  btn.addEventListener("click", () => {
    let userValue = document.querySelector("#userAge");
    let result = name(userValue.value);
    textResult.innerHTML = result;
    userValue.value = "";
  });
});

function name(value) {
  let textResult = "";
  if (value % 400 == 0) {
    textResult = "Високосний";
  }
  if (value % 100 == 0) {
    textResult = "Не Високосний";
  }
  if (value % 4 == 0) {
    textResult = "Високосний";
  }else{
    textResult = "Не Високосний";
  }
  return textResult;
}
