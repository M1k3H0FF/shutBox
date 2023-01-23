const board = document.getElementById("numbers");

board.addEventListener("click", onBoardClick);

function onBoardClick(event) {
  const id = event.target.innerHTML;
  if(event.target.innerHTML === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
    event.target.innerHTML = ' '
  }
  console.log(id, "line39");
}


