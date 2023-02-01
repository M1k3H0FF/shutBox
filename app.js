const dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);

function rollDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector(".img1")
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")
      .setAttribute("src", "dice" + randomNumber2 + ".png");

    var diceNum = randomNumber1 + randomNumber2;
    localStorage.setItem("dice", diceNum)
    const board = document.getElementById("numbers");
    board.addEventListener("click", onBoardClick);
    function onBoardClick(event, event2) {
      const id = event.target.innerHTML;
      if (event.target.innerHTML <= diceNum) {
        event.target.innerHTML = "";
        var minusNum = diceNum - id;
        const localStore = localStorage.getItem("dice");
        console.log(localStore, "line18")
      function secondBoardClick(event2) {
        if (localStore >= 1) {
          event.target.innerHTML = "";
        }
      }
        console.log(diceNum, id, minusNum,localStore, "line26");
      }
      

      // if (event.target.innerHTML <= minusNum) {
      //   event.target.innerHTML = "";
      // }
      // if (minusNum === 0) {
      //   alert("0");
      // }
      // const box1 = document.getElementById("num1").innerHTML;
      // const box2 = document.getElementById("num2").innerHTML;
      // const box3 = document.getElementById("num3").innerHTML;
      // const box4 = document.getElementById("num4").innerHTML;
      // const box5 = document.getElementById("num5").innerHTML;
      // const box6 = document.getElementById("num6").innerHTML;
      // const box7 = document.getElementById("num7").innerHTML;
      // const box8 = document.getElementById("num8").innerHTML;
      // const box9 = document.getElementById("num9").innerHTML;

      // console.log(box1, box2, "line 35");
      // function boardcheck() {
      //   if (box1 && box2 && box3 && box4 && box5 && box6 && box7 &&box8 && box9 === '') {
      //     alert("winner");
      //   }
      // }
      // console.log(minusNum, "line30");

      // console.log(diceNum, id, minusNum, "line36");
    }
  }, 500);
}
