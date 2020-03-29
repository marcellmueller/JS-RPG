import { playerRender, clearPlayer, sceneChange } from "./render.js";
import { gameBoard } from "./maps.js";

let playerLocation = 100;
let playerHasBeen = [];

let player = {
  name: "Marcel",
  maxHp: 40,
  hp: 40,
  atk: 7,
  exp: 19,
  next: 20,
  lvl: 1,
  gold: 10,
  potions: 3
};

//find the index of the player by searching the grid array
function findLocation(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

let moveUp = grid => {
  let location = findLocation(grid, playerLocation);
  let arrNum = location[0];
  let arrNum2 = location[1];
  clearPlayer(playerLocation);
  if (location[0] == 0) {
    playerRender(playerLocation);
  } else {
    arrNum = arrNum - 1;
    playerLocation = grid[arrNum][arrNum2];
    playerRender(playerLocation);
    setTimeout(function() {
      sceneChange(gameBoard, playerLocation);
    }, 1000);
  }
};

let moveDown = grid => {
  let location = findLocation(grid, playerLocation);
  let arrNum = location[0];
  let arrNum2 = location[1];
  clearPlayer(playerLocation);

  if (location[0] == 9) {
    playerRender(playerLocation);
    console.log("You cant move here");
  } else {
    arrNum = arrNum + 1;
    playerLocation = grid[arrNum][arrNum2];
    playerRender(playerLocation);

    setTimeout(function() {
      sceneChange(gameBoard, playerLocation);
    }, 1000);
  }
};

let moveLeft = grid => {
  let location = findLocation(grid, playerLocation);
  let arrNum = location[0];
  let arrNum2 = location[1];
  clearPlayer(playerLocation);

  if (location[1] == 0) {
    playerRender(playerLocation);
    console.log("You cant move here");
  } else {
    arrNum2 = arrNum2 - 1;
    playerLocation = grid[arrNum][arrNum2];
    playerRender(playerLocation);
    setTimeout(function() {
      sceneChange(gameBoard, playerLocation);
    }, 1000);
  }
};

let moveRight = grid => {
  let location = findLocation(grid, playerLocation);
  let arrNum = location[0];
  let arrNum2 = location[1];
  clearPlayer(playerLocation);

  if (location[1] == 9) {
    playerRender(playerLocation);
    console.log("You cant move here");
  } else {
    arrNum2 = arrNum2 + 1;
    playerLocation = grid[arrNum][arrNum2];
    playerRender(playerLocation);
    setTimeout(function() {
      sceneChange(gameBoard, playerLocation);
    }, 1000);
  }
};

export {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  playerHasBeen,
  playerLocation,
  player
};
