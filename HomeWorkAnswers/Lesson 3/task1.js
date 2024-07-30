function taskOne() {
  let input = +document.querySelector(".inputTask-1").value;
  let out = document.querySelector(".outTask-1");
  if (input % 2 == 0) {
    out.innerHTML = "парне";
  } else {
    out.innerHTML = "непарне";
  }
}
document.querySelector(".btnTask-1").onclick = taskOne;
