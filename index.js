const divListen = document.getElementById("box");
window.addEventListener("keydown", moveFunction);
let x = 0;
let y = 0;

function moveFunction(keypress) {
  switch (keypress.key) {
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
  }
  divListen.style.top = y + "px";
  divListen.style.left = x + "px";
}

