import { playerHasBeen, player } from "./player.js";
import { battleStart } from "./battle.js";
import { priest } from "./priest.js";
export { displayMap, playerRender, clearPlayer, playerStats, sceneChange };

//render the map arrays
let displayMap = grid => {
  let displayGrid = document.getElementById("grid");
  let i = 0;
  let y = 0;
  for (i = 0; i < 10; i++) {
    for (y = 0; y < 10; y++) {
      let row = document.createElement("div");
      row.className = "gridSquares";
      displayGrid.appendChild(row).id = grid[i][y];
    }
  }
};

//renders the player image on grid location
let playerRender = playerLocation => {
  let playerIs = document.getElementById(playerLocation);

  //check if player has been on square to mark
  //color on map
  if (playerHasBeen.includes(playerLocation)) {
  } else {
    playerHasBeen.push(playerLocation);
    playerIs.style.backgroundColor = "red";
  }

  let playerImg = document.createElement("img");
  playerImg.src = "./img/player.gif";
  playerIs.appendChild(playerImg);
};

//clear player image from current cell
let clearPlayer = playerLocation => {
  let player = document.getElementById(playerLocation);
  player.innerHTML = "";
};

//display player stats
let playerStats = player => {
  let name = document.getElementById("name");
  let hp = document.getElementById("hp");
  let atk = document.getElementById("atk");
  let exp = document.getElementById("exp");
  let next = document.getElementById("next");
  let lvl = document.getElementById("lvl");
  let gold = document.getElementById("gold");
  let potion = document.getElementById("mapPotion");
  name.textContent = player.name;
  hp.textContent = "HP:‏‏‎ ‎‏‏‎ ‎‏‏‎  " + player.hp;
  atk.textContent = "ATK:‏‏‎ ‎‏‏‎ ‎ " + player.atk;
  exp.textContent = "EXP: ‏‏‎ ‎ " + player.exp;
  next.textContent = "Next: " + player.next;
  lvl.textContent = "Level:" + player.lvl;
  gold.textContent = "Gold: " + player.gold;
  potion.textContent = "Use Potion (" + player.potions + ")";
};

let sceneChange = (gameBoard, playerLocation) => {
  let type = gameBoard[playerLocation].type;
  let show = document.getElementById(type);
  let mainMap = document.getElementById("mainMap");
  let change = () => {
    mainMap.style.visibility = "hidden";
    show.style.visibility = "visible";
  };
  if (type == "story") {
    change();
  } else if (type == "battle" && gameBoard[playerLocation].complete == false) {
    battleStart(player, playerLocation, gameBoard);
    change();
  } else if (type == "priest" && gameBoard[playerLocation].complete == false) {
    priest();
    change();
  } else if (type == "item" && gameBoard[playerLocation].complete == false) {
    change();
  }
};
