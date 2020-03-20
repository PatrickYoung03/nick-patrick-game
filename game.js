// Game
/*
Top down FPS / survival game.

1. Render the canvas using canvas element
   create square
   
2. create game loop 
        player input 
        game logic
        render all to canvas

3. move player by assigning keydown event listeners to variables that assing a velocity
   
4. make collisions with outside walls using math.max / math.min

5. make walls 

6. make ai's 

7. Make AI's chase player 1
    - on collision game over
    - timer counts how long you can survive

7. make weapons 

*/

const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

let keyUp, keyDown, keyLeft, keyRight;

let x = 25;
let y = 25;
let wid = 5;
let hei = 5;

let speed = 3;

// const GAME_WIDTH = 800;
// const GAME_HEIGHT = 800;

// canvas.style.width = GAME_WIDTH + "px";
// canvas.style.height = GAME_HEIGHT + "px";

function handleMovement() {
  keyLeft && x > 0 && (x -= 1);
  keyUp && y > 0 && (y -= 1);
  keyRight && (x = Math.min(x + 1, canvas.width - wid));
  keyDown && (y = Math.max(0, y + 1));
}

function gameLoop() {
  handleMovement();

  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, 500, 500);
  ctx.fillRect(x, y, wid, hei);
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

// function gameWindow() {
//   this.x = 0;
//   this.y = 0;

//   this.gameWidth = GAME_WIDTH;
//   this.gameHeight = GAME_HEIGHT;
// }

document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 37:
      keyLeft = true;
      break;
    case 38:
      keyUp = true;
      break;
    case 39:
      keyRight = true;
      break;
    case 40:
      keyDown = true;
      break;
  }
  console.log(event.keyCode);
});

document.addEventListener("keyup", event => {
  switch (event.keyCode) {
    case 37:
      keyLeft = false;
      break;
    case 38:
      keyUp = false;
      break;
    case 39:
      keyRight = false;
      break;
    case 40:
      keyDown = false;
      break;
  }
});
