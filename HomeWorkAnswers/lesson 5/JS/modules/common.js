
let getEnteredValue = (msg, isTextAnswer = false) => {
    while (true) {
      let value = prompt(msg);
      if(value !== "" && value !== null) {
        if(isTextAnswer)  return value.toLowerCase();
        else if(!isNaN(value)) return Number(value);
        alert("Не коректне значення!");
      }
    }
  }
