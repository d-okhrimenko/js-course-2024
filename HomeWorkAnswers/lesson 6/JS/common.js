let getNumericValue = msg => {
    while (true) {
      let value = prompt(msg);
      if (!isNaN(value) && value !== "" && value !== null) return Number(value).toFixed(0);
      alert("Не коректне значення!");
    }
  }

let getSymbolString = (symbol, qty) =>{
    str = "";
    for(let step = 0; step < qty; step++) str += symbol;
    return str; 
}