let getEnteredValue = (msg, isTextAnswer = false, roundRate = 0) => {
    while (true) {
      let value = prompt(msg);
      if(value !== "" && value !== null) {
        if(isTextAnswer)  return (value.charAt(0).toLowerCase() + value.slice(1));
        else if(!isNaN(value)) return Number(value).toFixed(roundRate);
        alert("Не коректне значення!");
      }
    }
  }
  
  let getSymbolString = (symbol, qty) =>{
      str = "";
      for(let step = 0; step < qty; step++) str += symbol;
      return str; 
  }