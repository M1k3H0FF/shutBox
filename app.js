const board = document.getElementById("numbers");
// const dice = document.getElementById("diceBox");
board.addEventListener("click", onBoardClick);
// dice.addEventListener("click", rollDice)
function onBoardClick(event) {
  const id = event.target.innerHTML;
  if (event.target.innerHTML === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
    event.target.innerHTML = " ";
  }
  console.log(id, "line39");
}

const dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);

function rollDice(event) {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1, randomNumber2, "line20");

    document
      .querySelector(".img1")
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")
      .setAttribute("src", "dice" + randomNumber2 + ".png");
  }, 500);
}
