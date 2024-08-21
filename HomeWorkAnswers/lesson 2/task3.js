const myName = "Ihor";
document.getElementById("btn").onclick = function() {
  let note = document.querySelector("#note");
  note.innerHTML = `Привіт, ${myName}`;
  note.style.color = "Blue";
};
