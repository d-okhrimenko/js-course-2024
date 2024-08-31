let userNumber;
let robotNumber;
let userCounter = 0;
let robotCounter = 0;
let counter = 0;

function showUserImg() {
  const rockImg = document.getElementById("user_rock_img");
  const scissorsImg = document.getElementById("user_scissors_img");
  const paperImg = document.getElementById("user_paper_img");
  if (userNumber == 1) {
    rockImg.style.display = "block";
    scissorsImg.style.display = "none";
    paperImg.style.display = "none";
  } else if (userNumber == 2) {
    scissorsImg.style.display = "block";
    paperImg.style.display = "none";
    rockImg.style.display = "none";
  } else if (userNumber == 3) {
    paperImg.style.display = "block";
    rockImg.style.display = "none";
    scissorsImg.style.display = "none";
  }
}

function showRobotImg() {
  const robotRockImg = document.getElementById("robot_rock_img");
  const robotScissorsImg = document.getElementById("robot_scissors_img");
  const robotPaperImg = document.getElementById("robot_paper_img");
  if (robotNumber == 1) {
    robotRockImg.style.display = "block";
    robotScissorsImg.style.display = "none";
    robotPaperImg.style.display = "none";
  } else if (robotNumber == 2) {
    robotScissorsImg.style.display = "block";
    robotPaperImg.style.display = "none";
    robotRockImg.style.display = "none";
  } else if (robotNumber == 3) {
    robotPaperImg.style.display = "block";
    robotRockImg.style.display = "none";
    robotScissorsImg.style.display = "none";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min);
}

// BUTTONS

document.querySelector("#stone_ctrl").onclick = function () {
  userNumber = 1;
  showUserImg();
  robotNumber = getRandomInt();
  showRobotImg();
  compareNumbers();
  isGameEnd();
};

document.querySelector("#scissors_ctrl").onclick = function () {
  userNumber = 2;
  showUserImg();
  robotNumber = getRandomInt();
  showRobotImg();
  compareNumbers();
  isGameEnd();
};

document.querySelector("#paper_ctrl").onclick = function () {
  userNumber = 3;
  showUserImg();
  robotNumber = getRandomInt();
  showRobotImg();
  compareNumbers();
  isGameEnd();
};

const addUserBorder = document.getElementById("user_image_container");
const addRobotBorder = document.getElementById("robot_image_container");

function userWin() {
  userCounter++;
  let userScore = document.getElementById("player_score");
  userScore.innerHTML = userCounter;
  addUserBorder.style.border = "4px solid rgb(138, 43, 226)";
  addRobotBorder.style.border = "4px solid rgb(255, 255, 255)";
  setTimeout(() => alert("Ви виграли цей раунд!"), 300);
}

function robotWin() {
  robotCounter++;
  let robotScore = document.getElementById("robot_score");
  robotScore.innerHTML = robotCounter;
  addRobotBorder.style.border = "4px solid rgb(138, 43, 226)";
  addUserBorder.style.border = "4px solid rgb(255, 255, 255)";
  setTimeout(() => alert("Робот виграв цей раунд!"), 300);
}

function draw() {
  addRobotBorder.style.border = "4px solid rgb(255, 255, 255)";
  addUserBorder.style.border = "4px solid rgb(255, 255, 255)";
  setTimeout(() => alert("Нічия!"), 300);
}

function compareNumbers() {
  if (userNumber == 1) {
    if (userNumber == robotNumber) {
      draw();
    } else if (userNumber == 1 && robotNumber == 2) {
      userWin();
    } else robotWin();
  }
  if (userNumber == 2) {
    if (userNumber == robotNumber) {
      draw();
    } else if (userNumber == 2 && robotNumber == 3) {
      userWin();
    } else robotWin();
  }
  if (userNumber == 3) {
    if (userNumber == robotNumber) {
      draw();
    } else if (userNumber == 3 && robotNumber == 1) {
      userWin();
    } else robotWin();
  }
}

function isGameEnd() {
  if (counter == 4) {
    const gameOver = document.getElementById("game_over");
    gameOver.style.display = "flex";
    finalScore();
  } else {
    counter++;
  }
  console.log(counter + " раунд");
}

function cleanScreen() {
  const rockImg = document.getElementById("user_rock_img");
  const scissorsImg = document.getElementById("user_scissors_img");
  const paperImg = document.getElementById("user_paper_img");
  rockImg.style.display = "none";
  scissorsImg.style.display = "none";
  paperImg.style.display = "none";

  const robotRockImg = document.getElementById("robot_rock_img");
  const robotScissorsImg = document.getElementById("robot_scissors_img");
  const robotPaperImg = document.getElementById("robot_paper_img");

  robotRockImg.style.display = "none";
  robotScissorsImg.style.display = "none";
  robotPaperImg.style.display = "none";

  const addRobotBorder = document.getElementById("robot_image_container");
  const addUserBorder = document.getElementById("user_image_container");
  addRobotBorder.style.border = "4px solid rgb(255, 255, 255)";
  addUserBorder.style.border = "4px solid rgb(255, 255, 255)";

  let robotScore = document.getElementById("robot_score");
  robotScore.innerHTML = robotCounter;
  let userScore = document.getElementById("player_score");
  userScore.innerHTML = userCounter;
}

const finalScoreRobotWin = document.getElementById("game_over_lose_message");
const finalScoreDraw = document.getElementById("game_over_draw_message");
const finalScoreUserWin = document.getElementById("game_over_win_message");

document.querySelector("#start_new_game").onclick = function () {
  userCounter = 0;
  robotCounter = 0;
  counter = 0;
  const gameOver = document.getElementById("game_over");
  gameOver.style.display = "none";
  finalScoreDraw.style.display = "none";
  finalScoreUserWin.style.display = "none";
  finalScoreRobotWin.style.display = "none";

  cleanScreen();
};

function finalScore() {
  if (userCounter == robotCounter) {
    finalScoreDraw.style.display = "flex";
  } else if (userCounter > robotCounter) {
    let finUserScoreDraw = document.getElementById("user_fin_score");
    let finRobotScoreDraw = document.getElementById("robot_fin_score");
    finalScoreUserWin.style.display = "flex";
    finUserScoreDraw.innerHTML = userCounter;
    finRobotScoreDraw.innerHTML = robotCounter;
  } else if (userCounter < robotCounter) {
    finalScoreRobotWin.style.display = "flex";
  }
}
