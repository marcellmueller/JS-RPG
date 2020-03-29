let grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

let gameBoard = [
  {
    id: 0,
    type: "null",
    complete: false
  },
  {
    id: 1,
    type: "battle",
    enemies: "bats",
    complete: false
  },
  {
    id: 2,
    type: "story",
    enemies: "darklord",
    complete: false
  },
  {
    id: 3,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 4,
    type: "story",
    enemies: "darklord",
    complete: false
  },
  {
    id: 5,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 6,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 7,
    type: "item",
    complete: false
  },
  {
    id: 8,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 9,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 10,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 11,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 12,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 13,
    complete: false
  },
  {
    id: 14,
    type: "item",
    complete: false
  },
  {
    id: 15,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 16,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 17,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 18,
    complete: false
  },
  {
    id: 19,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 20,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 21,
    type: "item",
    complete: false
  },
  {
    id: 22,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 23,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 24,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 25,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 26,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 27,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 28,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 29,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 30,
    type: "priest",
    complete: false
  },
  {
    id: 31,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 32,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 33,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 34,
    type: "battle",
    enemies: "hellcat",
    complete: false
  },
  {
    id: 35,
    complete: false
  },
  {
    id: 36,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 37,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 38,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 39,
    complete: false
  },
  {
    id: 40,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 41,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 42,
    type: "battle",
    enemies: "hellcatt",
    complete: false
  },
  {
    id: 43,
    complete: false
  },
  {
    id: 44,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 45,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 46,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 47,
    complete: false
  },
  {
    id: 48,
    type: "item",
    complete: false
  },
  {
    id: 49,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 50,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 51,
    complete: false
  },
  {
    id: 52,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 53,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 54,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 55,
    complete: false
  },
  {
    id: 56,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 57,
    type: "battle",
    enemies: "skullknight",
    complete: false
  },
  {
    id: 58,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 59,
    complete: false
  },
  {
    id: 60,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 61,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 62,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 63,
    complete: false
  },
  {
    id: 64,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 65,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 66,
    complete: false
  },
  {
    id: 67,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 68,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 69,
    type: "item",
    complete: false
  },
  {
    id: 70,
    complete: false
  },
  {
    id: 71,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 72,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 73,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 74,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 75,
    type: "item",
    complete: false
  },
  {
    id: 76,
    complete: false
  },
  {
    id: 77,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 78,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 79,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 80,
    complete: false
  },
  {
    id: 81,
    type: "battle"
  },
  {
    id: 82,
    type: "item",
    complete: false
  },
  {
    id: 83,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 84,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 85,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 86,
    complete: false
  },
  {
    id: 87,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 88,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 89,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 90,
    type: "priest",
    complete: false
  },
  {
    id: 91,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 92,
    type: "item",
    complete: false
  },
  {
    id: 93,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 94,
    complete: false
  },
  {
    id: 95,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 96,
    type: "battle",
    enemies: "creeper",
    complete: false
  },
  {
    id: 97,
    complete: false
  },
  {
    id: 98,
    type: "battle",
    enemies: "shadow",
    complete: false
  },
  {
    id: 99,
    type: "battle",
    enemies: "skeleton",
    complete: false
  },
  {
    id: 100,
    type: "start",
    complete: true
  }
];
export { grid, gameBoard };
