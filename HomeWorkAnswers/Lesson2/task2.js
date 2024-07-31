document.querySelector("#btn").onclick = function(){
    let output = document.querySelector("#output");
    output.innerHTML = new Date().toLocaleDateString();
    output.style.color = "green";
}

const welcomeForm = document.querySelector('.js-welcomeForm');

const handleSubmit = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const name = form.elements.name.value;

  alert(`Привіт ${name || 'незнайомцю'}`);
  form.reset();
};

welcomeForm.addEventListener('submit', handleSubmit);
