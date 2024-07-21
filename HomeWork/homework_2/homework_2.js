const dateText = document.querySelector(".date-text");
const btnGreeting = document.querySelector(".btn-greeting");
const greetingText = document.querySelector(".greeting-text");
const nameInput = document.querySelector(".name-input");
const date = new Date();

dateText.textContent = date;

const btnGreetingHanddler = () => {
  const userName = nameInput.value;
  greetingText.textContent = `Hello, ${userName}`;
};

btnGreeting.addEventListener("click", btnGreetingHanddler);
