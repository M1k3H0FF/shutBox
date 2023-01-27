const dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);

function rollDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber1, randomNumber2, "line20");

    document
      .querySelector(".img1")
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")
      .setAttribute("src", "dice" + randomNumber2 + ".png");

    var finalNum = randomNumber1 + randomNumber2;
    const board = document.getElementById("numbers");
    board.addEventListener("click", onBoardClick);
    function onBoardClick(event) {
      const id = event.target.innerHTML;
      if(event.target.innerHTML <= finalNum) {
        event.target.innerHTML = "";
        var minusNum = finalNum - id;
        console.log(finalNum, id, minusNum, "line26")
      }
      if (event.target.innerHTML <= minusNum) {
        event.target.innerHTML = "";
      }
      console.log(minusNum, "line30")
     
      // console.log(finalNum, id, minusNum, "line39");
    }
    // console.log(finalNum, id, "line30")
  }, 500);
}
