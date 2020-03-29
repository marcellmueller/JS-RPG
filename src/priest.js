import { playerStats } from "./render.js";

export { priest, priestHealFunc, priestPowerFunc };

let priest = () => {
  let text = document.getElementById("priestText");
  priestBtn.textContent = "Leave...";
  text.textContent =
    "Good to see someone around here. I can offer healing or UnHoly power...for a price.";
};

let priestHealFunc = player => {
  let text = document.getElementById("priestText");
  if (player.gold >= 10 && player.hp < player.maxHp) {
    player.hp = player.maxHp;
    player.gold = player.gold - 10;
    hideButtons();
    text.textContent =
      "Your wounds may have healed, but you still don't feel healthy.";
    playerStats(player);
  } else if (player.hp == player.maxHP) {
    hideButtons();
    text.textContent = "You don't need this.";
  } else if (player.gold <= 9) {
    hideButtons();
    text.textContent = "You can't afford this";
  }
};

let priestPowerFunc = player => {
  let text = document.getElementById("priestText");
  if (player.gold >= 100) {
    player.maxHp = Math.round(player.maxHp * 1.25);
    player.hp = player.maxHp;
    player.atk = Math.round(player.maxHp * 1.25);
    player.gold = player.gold - 100;
    hideButtons();
    playerStats(player);
    text.textContent =
      "You feel a dark power surging through you. HP and ATK raised by 25%.";
  } else if (player.gold <= 99) {
    hideButtons();
    text.textContent = "You can't afford this";
  }
};

// let hideButtons = () => {
//   let priestPower = document.getElementById("priestPower");
//   let priestHeal = document.getElementById("priestHeal");
//   priestPower.style.visibility = "hidden";
//   priestHeal.style.visibility = "hidden";
// };
// let showButtons = () => {
//   let priestPower = document.getElementById("priestPower");
//   let priestHeal = document.getElementById("priestHeal");
//   priestPower.style.visibility = "visible";
//   priestHeal.style.visibility = "visible";
// };
