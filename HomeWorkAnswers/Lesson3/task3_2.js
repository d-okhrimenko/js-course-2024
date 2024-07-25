let arrDay = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
];
document.querySelector("#bTn").onclick = function () {
  let nowDay = new Date().getDay();
  alert("День тижня - " + arrDay[nowDay]);
  let output = document.querySelector("#outputText");
  output.innerHTML = "День тижня - " + arrDay[nowDay];
  output.style.color = "blue";
};

// function showDay(num)
// {
//   switch (num) {
//     case 0:
//       alert("День тижня - неділя");
//       break;
//     case 1:
//       alert("День тижня - понеділок");
//       break;
//     case 2:
//       alert("День тижня - вівторок");
//       break;
//     case 3:
//       alert("День тижня - середа");
//       break;
//     case 4:
//       alert("День тижня - четвер");
//       break;
//     case 5:
//       alert("День тижня - п'ятниця");
//       break;
//     case 6:
//       alert("День тижня - субота");
//       break;
//     default:
//       break;
//   }
// }
