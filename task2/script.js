


const shopBtn = document.getElementById('par')
const addBtn = document.getElementById('adding')
const deleteBtn = document.getElementById('delete')
const reset = document.getElementById('reset')
let shoppingArr = ["milk", "bottle"];

shopBtn.addEventListener("click", function showArray (){
    
    
    alert(`Список покупок: ${shoppingArr}`)
    
})

addBtn.addEventListener("click", function addStuff(itemadd){
     itemadd = prompt("Введіть товар")
    shoppingArr.push(itemadd)
 
  alert(`Товар додано: ${itemadd}`)
})

deleteBtn.addEventListener("click", function delStuff(itemdel){
      itemdel = prompt("Введіть товар") 
      
      let index = shoppingArr.indexOf(itemdel);
      if (index !== -1) {
        shoppingArr.splice(index, 1);
      }
            
          console.log(shoppingArr)
       
   
    alert(`Товар видалено: ${itemdel}`)
  
    
})

reset.addEventListener("click", function () {
    shoppingArr = [];
})

