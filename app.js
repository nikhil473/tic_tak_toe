const boxs = document.querySelectorAll('.box');
const statusTxt = document.querySelector('#status');
const line= document.querySelector(".line")

const win = [
  [0, 1, 2, 17, 0, 0],
  [3, 4, 5, 50, 0, 0],
  [6, 7, 8, 83, 0, 0],
  [0, 3, 6, 0, 17, 90],
  [1, 4, 7, 0, 50, 90],
  [2, 5, 8, 0, 83, 90],
  [0, 4, 8, 15, 15, 45],
  [2, 4, 6, 15, 85, 135]
];

let user = "X";
let currentuser = "";
let gameEnded = false;

boxs.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (!gameEnded && event.target.innerText === "") {
      event.target.innerText = user;
      currentuser = event.target.innerText;
      checkWinner();
      if (user === "X") {
        user = "O";
      } else {
        user = "X";
      }
    }
  });
});

function checkWinner() {
  win.forEach((ele) => {
    if (
      boxs[ele[0]].innerText !== "" &&
      boxs[ele[1]].innerText !== "" &&
      boxs[ele[2]].innerText !== ""
    ) {
      if (
        boxs[ele[0]].innerText === boxs[ele[1]].innerText &&
        boxs[ele[0]].innerText === boxs[ele[2]].innerText
      ) {
        
        line.style.top=`${ele[3]}%`
        line.style.left=`${ele[4]}%`
        line.style.rotate=`${ele[5]}deg`
        statusTxt.style.display = "block";
        statusTxt.innerText = currentuser + " won the game!";
        gameEnded = true;
        
        boxs.forEach((box) => {
          box.removeEventListener("click", boxClickHandler);
        });
      }
    }
  });
}

function boxClickHandler(event) {
  if (!gameEnded && event.target.innerText === "") {
    event.target.innerText = user;
    currentuser = event.target.innerText;
    checkWinner();
    if (user === "X") {
      user = "O";
    } else {
      user = "X";
    }
  }
}

function restartGame() {
  statusTxt.style.display = "none";
  line .style.display = "none";
  boxs.forEach((box) => {
    box.innerText = "";
  });
  currentuser = "";
  gameEnded = false;
  boxs.forEach((box) => {
    box.addEventListener("click", boxClickHandler);
  });
}


