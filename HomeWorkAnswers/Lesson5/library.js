let showResult = (result, selector) => document.querySelector(selector).innerHTML = result;

let getNumValue = selector => {
   let value = document.querySelector(selector).value.trim();
   let isValid = !isNaN(value) && value !== "" && value !== null;
   if (isValid) {
      return Number(value);
   } else {
      return null;
   }
}