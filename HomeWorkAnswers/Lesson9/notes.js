
let e = document.querySelector('#element');

e.classList.add('test');
e.classList.remove('test');
e.classList.contains('test') // перевірити, чи є клас на елементі

e.style.borderRadius = '8px';
// -moz-radial-gradient =  MozRadialGradient

let list = document.createDocumentFragment // можна створити фрагмент, згенерувати складну структуру і потім вставити в документ. Вставиться один раз, а не кожен раз додаючи новий елемент

let li = document.createElement('li') // <li>

e.appendChild(li) // додати дочірній елемент

e.insertAdjacentHTML('beforeend', <li>text2</li>) // вставляє код в вибрану частину коду відносно елементу (перед, після ...)

e.insertAdjacentElement('afterbegin', li); // вставляє елемент

e.addEventListener('click', functionName) // використ. замість e.onClick = (){}
e.removeEventListener('click', functionName)