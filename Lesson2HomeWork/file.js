const dateElement = document.querySelector(".date");
const currentDate = new Date();

dateElement.textContent = currentDate
    .toLocaleDateString("uk-UA", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
    .replace(/(\s)([а-я])/u, (m) => m.toUpperCase());

const name = "Оксана";

document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#output").textContent = `Привіт ${name}`;
});
