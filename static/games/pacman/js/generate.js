import { GenericPellet, BigPellet } from "./pellet.js";

export function buildLevel(across, down, game) {
  let pellets = [];
  for (let i = 0; i < across; i++) {
    for (let j = 0; j < down; j++) {
      let position = {
        x: ((i + 1) * game.gameWidth) / (across + 1),
        y: ((j + 1) * game.gameHeight) / (down + 1)
      };
      pellets.push(new GenericPellet(game, position));
    }
  }
  var bigPositions = [
    { x: 3 * game.pd, y: 2 * game.pd },
    { x: 6 * game.pd, y: 4 * game.pd },
    { x: game.gameWidth - 3 * game.pd, y: 2 * game.pd },
    { x: game.gameWidth - 6 * game.pd, y: 4 * game.pd },
    { x: 3 * game.pd, y: game.gameHeight - 2 * game.pd },
    { x: 6 * game.pd, y: game.gameHeight - 4 * game.pd },
    { x: game.gameWidth - 3 * game.pd, y: game.gameHeight - 2 * game.pd },
    { x: game.gameWidth - 6 * game.pd, y: game.gameHeight - 4 * game.pd }
  ];

  for (let i = 0; i < bigPositions.length; i++) {
    pellets.push(new BigPellet(game, bigPositions[i]));
  }

  return pellets;
}

export function generateGhostList(level, game) {
  // return active ghost list and inactive ghost list
}
