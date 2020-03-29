import { playerLocation, player } from "./player.js";
import { moveUp, moveDown, moveLeft, moveRight } from "./player.js";
import { grid, gameBoard } from "./maps.js";
import {
  displayMap,
  playerRender,
  playerStats,
  sceneChange
} from "./render.js";
import { battleStart } from "./battle.js";
import { priestHealFunc, priestPowerFunc } from "./priest.js";

displayMap(grid);
playerRender(playerLocation);
playerStats(player);

let nameInput = document.getElementById("nameInput");
function errorClear() {
  formValidate.textContent = "‎‎‏‏‎ ‎";
}

errorClear();

nameInput.addEventListener("input", function(event) {
  if (nameInput.validity.valid) {
    errorClear();
  } else if (!nameInput.validity.valid) {
    errorClear();
    formValidate.textContent = "Is that a real name?";
  }
});

buttonUp.onclick = function() {
  document.getElementById("buttonUp").style.pointerEvents = "none";
  setTimeout(function() {
    document.getElementById("buttonUp").style.pointerEvents = "auto";
  }, 1100);
  moveUp(grid);
};

buttonDown.onclick = function() {
  document.getElementById("buttonDown").style.pointerEvents = "none";
  setTimeout(function() {
    document.getElementById("buttonDown").style.pointerEvents = "auto";
  }, 1100);
  moveDown(grid);
};

buttonLeft.onclick = function() {
  document.getElementById("buttonLeft").style.pointerEvents = "none";
  setTimeout(function() {
    document.getElementById("buttonLeft").style.pointerEvents = "auto";
  }, 1100);
  moveLeft(grid);
};

buttonRight.onclick = function() {
  document.getElementById("buttonRight").style.pointerEvents = "none";
  setTimeout(function() {
    document.getElementById("buttonRight").style.pointerEvents = "auto";
  }, 1100);
  moveRight(grid);
};

priestBtn.onclick = function() {
  document.getElementById("priestBtn").disabled = true;
  setTimeout(function() {
    document.getElementById("priestBtn").disabled = false;
  }, 1000);

  let priest = document.getElementById("priest");
  priest.style.visibility = "hidden";
  mainMap.style.visibility = "visible";
};

priestHeal.onclick = function() {
  priestHealFunc(player);
};

priestPower.onclick = function() {
  priestPowerFunc(player);
};

startGame.onclick = function() {
  if (nameInput.validity.valid) {
    let playerName = document.getElementById("nameInput").value;
    player.name = playerName;
    playerStats(player);
    title.style.visibility = "hidden";
    intro.style.visibility = "visible";
  } else if (!nameInput.validity.valid) {
  }
};

gameOverBtn.onclick = function() {
  location.reload();
  return false;
};

itemBtn.onclick = function() {
  player.potions = player.potions + 1;
  gameBoard[playerLocation].complete = true;
  item.style.visibility = "hidden";
  mainMap.style.visibility = "visible";
};

introBtn.onclick = function() {
  intro.style.visibility = "hidden";
  mainMap.style.visibility = "visible";
};

mapPotion.onclick = function() {
  if (player.potions > 0 && player.hp < player.maxHp) {
    battleText.textContent = 30 + " HP Restored!";
    player.potions = player.potions - 1;
    player.hp = player.hp + 30;
    if (player.hp > player.maxHp) {
      player.hp = player.maxHp;
    }
    playerStats(player);
  } else if (player.hp >= player.maxHp) {
    mapPotionText.textContent = "You don't need that.";
    setTimeout(function() {
      mapPotionText.textContent = "";
    }, 2500);
  } else if (player.potions == 0) {
    mapPotionText.textContent = "You're out of potions!'";
    setTimeout(function() {
      mapPotionText.textContent = "";
    }, 2500);
  }
};

storyContinue.onclick = function() {
  battleStart(player, playerLocation, gameBoard);
  story.style.visibility = "hidden";
  battle.style.visibility = "visible";
};

storyLeave.onclick = function() {
  story.style.visibility = "hidden";
  mainMap.style.visibility = "visible";
};

endBtn.onclick = function() {
  location.reload();
  return false;
};
