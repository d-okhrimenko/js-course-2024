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

class ActionDialog {
  constructor(dlgID, menuItemID) {
    this.dlgID = dlgID;
    this.itIsLogin = (menuItemID === "log-in") ? true : false;
    this.itIsPopup = (menuItemID === "view") ? true : false;
    this.dialog = document.getElementById(dlgID);
    this.menuItem = document.getElementById(menuItemID);
    this.header = document.getElementById(`${dlgID}-header`);
    
    if (this.itIsLogin) this.inputPassword = document.getElementById(`${dlgID}-input-password`);
    if (!this.itIsPopup) {
      this.input = document.getElementById(`${dlgID}-input${(this.itIsLogin) ? "-email" : ""}`);
      this.submitBtn = document.getElementById(`${dlgID}-submit`);
    }
    this.cancelBtn = document.getElementById(`${dlgID}-cancel`);

    let addArrayElement = () => userItemsList.push(this.input.value);
    let removeArrayElement = () => {
      if (userItemsList.includes(this.input.value)) userItemsList.splice(userItemsList.indexOf(this.input.value), 1);
      else alert(`Елемент "${this.input.value}" не існує...`);
    }
    let clearFormAndClose = () => {
        console.log(userItemsList);
        console.log(this.dialog.attributes.id.nodeValue);
        this.input.value = "";
        if (this.itIsLogin) this.inputPassword.value = "";
        this.dialog.close();
    }
    let arrayManipulation = difFunc => {
      console.log(this.input.value);
      if (Array.isArray(userItemsList) && this.input.value != "") {
        difFunc();
        clearFormAndClose();
      }
    }
    let userBasketView = () => {
      let str = "";
      const list = document.getElementById("popup-view-list");
      if (list != null) {
        list.innerHTML = "";
        for (const element of userItemsList)
          str += `<li><a href="#">${element}</a></li>\n`;
        list.innerHTML = str;
      }
    }

    if (this.dialog != null) {
      if (this.menuItem != null) this.menuItem.onclick = () => {
        if (!this.itIsPopup) this.dialog.showModal();
        else {
          userBasketView();
          this.dialog.classList.add("open");
        }
      }
      if (this.cancelBtn != null) this.cancelBtn.onclick = () => {
        if (!this.itIsPopup) clearFormAndClose();
        else this.dialog.classList.remove("open");
      }
      if (!this.itIsLogin && this.submitBtn != null) 
        this.submitBtn.onclick = () => 
          arrayManipulation((this.dlgID == "removal") ?  removeArrayElement : addArrayElement);
    }
    if (this.itIsPopup) {
      // close a popup window by pressing the Esc key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') 
            document.getElementById(this.dlgID).classList.remove("open");
      });
      // close a popup window by clicking outside it
      document.querySelector(`#${this.dlgID} .popup__view__box`).addEventListener("click", event => event._isClickWithInModal = true);
      document.querySelector(`#${this.dlgID}`).addEventListener("click", event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
      });
    }
  }
 
  setHeaderText = (textContent) => this.header.textContent = textContent;
  setSubmitText = (textContent) => this.submitBtn.textContent = textContent;
  setCancelText = (textContent) =>  this.cancelBtn.textContent = textContent;

}