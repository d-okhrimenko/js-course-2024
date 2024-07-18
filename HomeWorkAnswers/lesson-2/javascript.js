//Поточна дата
let date = document.querySelector('#date');
let btnOne = document.querySelector('#btnOne');

//Додаток до стилю 
date.style.margin = "auto auto 30px auto";
btnOne.style.padding = "10px 15px";

//Дія
btnOne.addEventListener('click', function () {
	date.innerHTML = "Поточна дата : " + new Date();
	date.style.textDecoration = "underline";
	console.log(new Date());
})


//-------------------------------------------

//Ім'я
let myName = document.querySelector('#myName');
let btnTwo = document.querySelector('#btnTwo');

//Додаток до стилю 
btnTwo.style.padding = "10px 15px";

//Дія
btnTwo.addEventListener('click', function () {
	myName.innerHTML = "Привіт Viacheslav";
});