import { CreateEnemy } from "./enemies.js";
import { player, playerLocation } from "./player.js";
import { gameBoard } from "./maps.js";
import { playerStats } from "./render.js";

export { battle, battleStart };

let playerTurn = Math.random() < 0.7;
let enemy;

let battleStart = (player, playerLocation, gameBoard) => {
  disableBtn();
  potionDisplay(player);
  battleText.textContent = "Battle!";
  enemy = gameBoard[playerLocation].enemies;
  enemy = enemyType(enemy);

  battleStatsDisplay(player, enemy);
  if (playerTurn == true) {
    battleText.textContent = player.name + "'s turn!";
  } else if (playerTurn == false) {
    battleText.textContent = enemy.name + "'s turn!";
  }

  battle();
};

let potionDisplay = player => {
  potion.textContent = "Use Potion" + " (" + player.potions + ")";
};
let battle = () => {
  if (playerTurn == true) {
    playerTurnFunc(player, enemy);
  } else if (playerTurn == false) {
    enemyTurnFunc(player, enemy);
  }
};

let playerTurnFunc = (player, enemy) => {
  if (player.hp == 0 || enemy.hp == 0) {
    checkWin(player, enemy);
    return;
  }
  enableBtn();
  showBtn();
  battleText.textContent = player.name + "'s turn!";
  attack.onclick = () => {
    disableBtn();

    let hit = Math.random() < 0.8;
    if (hit == true) {
      let atta = randomNumFunc(player.atk, 0.75, 1.25);
      enemy.hp = enemy.hp - atta;
      if (enemy.hp < 0) {
        enemy.hp = 0;
      }

      battleStatsDisplay(player, enemy);
      battleText.textContent = "You did " + atta + " damage!";
      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    } else if (hit == false) {
      battleText.textContent = "You missed!";
      hideBtn();
      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    }
  };
  powerAttack.onclick = () => {
    disableBtn();

    let hit = Math.random() < 0.6;
    if (hit == true) {
      let atta = randomNumFunc(player.atk, 1.25, 2.25);
      enemy.hp = enemy.hp - atta;
      if (enemy.hp < 0) {
        enemy.hp = 0;
      }
      battleStatsDisplay(player, enemy);
      battleText.textContent = "You did " + atta + " damage!";
      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    } else if (hit == false) {
      battleText.textContent = "You missed!";
      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    }
  };
  potion.onclick = () => {
    disableBtn();

    if (player.potions > 0 && player.hp < player.maxHp) {
      battleText.textContent = 30 + " HP Restored!";
      player.potions = player.potions - 1;
      player.hp = player.hp + 30;
      if (player.hp > player.maxHp) {
        player.hp = player.maxHp;
      }
      battleStatsDisplay(player, enemy);
      potionDisplay(player);

      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    } else if (player.hp >= player.maxHp) {
      battleText.textContent = "You don't need that.";
      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    } else if (player.potions == 0) {
      battleText.textContent = "You're out of potions.";
      setTimeout(function() {
        enemyTurnFunc(player, enemy);
      }, 2500);
    }
  };
};

let randomNumFunc = (atk, minNum, maxNum) => {
  let min = Math.round(atk * minNum);
  let max = Math.round(atk * maxNum);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

let enemyTurnFunc = (player, enemy) => {
  if (player.hp == 0 || enemy.hp == 0) {
    checkWin(player, enemy);
    return;
  }
  disableBtn();
  hideBtn();
  battleText.textContent = enemy.name + "'s turn!";
  let hit = Math.random() < 0.7;
  setTimeout(function() {
    if (hit == true) {
      let atta = randomNumFunc(enemy.atk, 0.75, 1.25);
      player.hp = player.hp - atta;
      if (player.hp < 0) {
        player.hp = 0;
      }
      battleText.textContent = "They did " + atta + " damage!";

      setTimeout(function() {
        battleStatsDisplay(player, enemy);
        playerTurnFunc(player, enemy);
      }, 2500);
    } else if (hit == false) {
      battleText.textContent = "They missed!";
      setTimeout(function() {
        playerTurnFunc(player, enemy);
      }, 2500);
    }
  }, 2500);
};

let checkWin = (player, enemy) => {
  let battle = document.getElementById("battle");
  let checkBoss = gameBoard[playerLocation].enemies;
  if (player.hp == 0) {
    hideBtn();

    battleText.textContent = "You Died.";
    setTimeout(function() {
      battle.style.visibility = "hidden";
      gameOver.style.visibility = "visible";
    }, 4500);
  } else if (enemy.hp == 0) {
    hideBtn();
    battleText.textContent = "Victory!";
    gameBoard[playerLocation].complete = true;
    console.log(gameBoard);
    player.gold = player.gold + enemy.gold;
    player.exp = player.exp + enemy.exp;
    setTimeout(function() {
      battleText.textContent =
        "Gained: " + enemy.exp + " EXP " + enemy.gold + " Gold";
    }, 2000);
    levelUp(player);
    playerStats(player);
    setTimeout(function() {
      if (checkBoss == "darklord") {
        battle.style.visibility = "hidden";
        end.style.visibility = "visible";
      } else {
        let battle = document.getElementById("battle");
        battle.style.visibility = "hidden";
        mainMap.style.visibility = "visible";
        document.getElementById("battleIMG").src = "./img/battle.png";
      }
    }, 6000);
  }
};
let levelUp = player => {
  if (player.exp >= player.next) {
    player.lvl = player.lvl + 1;
    player.maxHp = player.maxHp + Math.round(10 + player.maxHp * 0.15);
    player.atk = player.atk + Math.round(1 + player.atk * 0.15);
    player.next = player.next + Math.round(10 + player.next * 0.15);
    player.exp = 0;
    battleStatsDisplay(player, enemy);

    setTimeout(function() {
      battleText.textContent = "You leveled up!";
    }, 4000);
  }
};
let disableBtn = () => {
  document.getElementById("attack").style.pointerEvents = "none";
  document.getElementById("powerAttack").style.pointerEvents = "none";
  document.getElementById("potion").style.pointerEvents = "none";
};

let enableBtn = () => {
  document.getElementById("attack").style.pointerEvents = "auto";
  document.getElementById("powerAttack").style.pointerEvents = "auto";
  document.getElementById("potion").style.pointerEvents = "auto";
};

let hideBtn = () => {
  document.getElementById("attack").style.visibility = "hidden";
  document.getElementById("powerAttack").style.visibility = "hidden";
  document.getElementById("potion").style.visibility = "hidden";
};

let showBtn = () => {
  document.getElementById("attack").style.visibility = "visible";
  document.getElementById("powerAttack").style.visibility = "visible";
  document.getElementById("potion").style.visibility = "visible";
};
let battleStatsDisplay = (player, enemy) => {
  let battleName = document.getElementById("battleName");
  let battleHp = document.getElementById("battleHp");
  let battleAtk = document.getElementById("battleAtk");
  let enemyName = document.getElementById("enemyName");
  let enemyHp = document.getElementById("enemyHp");
  let enemyAtk = document.getElementById("enemyAtk");

  battleName.textContent = player.name;
  battleHp.textContent = "HP: " + player.hp;
  battleAtk.textContent = "ATK: " + player.atk;
  enemyName.textContent = enemy.name;
  enemyHp.textContent = "HP: " + enemy.hp;
  enemyAtk.textContent = "ATK: " + enemy.atk;
};

let enemyType = enemy => {
  if (enemy == "skeleton") {
    document.getElementById("battleIMG").src = "./img/skeleton.png";
    return (enemy = new CreateEnemy("Skeleton", 16, 4, 5, 2));
  } else if (enemy == "shadow") {
    document.getElementById("battleIMG").src = "./img/shadow.png";
    return (enemy = new CreateEnemy("Shadow", 24, 5, 7, 4));
  } else if (enemy == "creeper") {
    document.getElementById("battleIMG").src = "./img/creeper.png";
    return (enemy = new CreateEnemy("Creeper", 30, 7, 10, 4));
  } else if (enemy == "skullknight") {
    document.getElementById("battleIMG").src = "./img/skullknight.png";
    return (enemy = new CreateEnemy("Skull Knight", 60, 12, 14, 3));
  } else if (enemy == "hellcat") {
    document.getElementById("battleIMG").src = "./img/hellcat.png";
    return (enemy = new CreateEnemy("Hellcat", 40, 10, 10, 2));
  } else if (enemy == "darklord") {
    document.getElementById("battleIMG").src = "./img/darklord.png";
    return (enemy = new CreateEnemy("Dark Lord", 200, 30, 100, 100));
  }
};
