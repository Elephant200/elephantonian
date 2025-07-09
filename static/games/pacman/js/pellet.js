import { detectPacmanPelletCollision } from "./collisions.js";
import { Timer } from "./ghost.js";
const GHOSTMODE = {
  SCATTER: 0, // targets specific location outside
  CHASE: 1, // targets pacman
  SCARED: 2, // runs from pacman
  EATEN: 3, // different image, speeds up, targets start position
  DORMANT: 4, // does nothing at start position
  PRESCATTER: 5 // tells the ghost to get out of the ghost box
};

export class GenericPellet {
  constructor(game, position) {
    this.position = position;
    this.size = 3;
    this.game = game;
    this.gone = false;
  }
  update(deltaTime) {
    if (detectPacmanPelletCollision(this.game.pacman, this)) {
      this.gone = true;
      this.game.score += this.game.currentLevel;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

/*
export class BigPellet extends GenericPellet {
  constructor(game, position) {
    super(game, position);
    this.size = 9;
    // timeout that doesn't do anything
    this.game.scaredTimeout = setTimeout(() => (this.size += 0), 0.01);
  }
  update(deltaTime) {
    if (detectPacmanPelletCollision(this.game.pacman, this)) {
      clearTimeout(this.game.scaredTimeout);
      this.game.score += 4;
      this.gone = true;
      this.game.ghosts.forEach((ghost) => (ghost.ghostmode = GHOSTMODE.SCARED));
      var timeout;
      if (this.game.currentLevel < 5) {
        timeout = 20000;
      } else if (this.game.currentLevel < 10) {
        timeout = 15000;
      } else if (this.game.currentLevel < 15) {
        timeout = 10000;
      } else if (this.game.currentLevel < 20) {
        timeout = 5000;
      } else {
        timeout = (25 - 20) * 1000 > 0 ? (25 - 20) * 1000 : 0;
      }
      this.game.scaredTimeout = setTimeout(() => {
        this.game.ghosts.forEach((ghost) => this.checkScared(ghost));
      }, timeout);
      console.log(timeout);
    }
  }
  checkScared(ghost) {
    if (ghost.ghostmode == GHOSTMODE.SCARED) {
      ghost.ghostmode = GHOSTMODE.CHASE;
    }
  }
}
*/
export class BigPellet extends GenericPellet {
  constructor(game, position) {
    super(game, position);
    this.size = 9;
    //timeout that does nothing
    /*this.game.scaredTimeout = setTimeout(() => (this.size += 0), 1);*/
  }
  update(deltaTime) {
    if (detectPacmanPelletCollision(this.game.pacman, this)) {
      clearTimeout(this.game.scaredTimeout);
      this.game.score += this.game.currentLevel * 4;
      this.gone = true;
      this.game.ghosts.forEach((ghost) => this.becomeScared(ghost));
    }
  }
  checkScared(ghost) {
    if (ghost.ghostmode === GHOSTMODE.SCARED) ghost.ghostmode = GHOSTMODE.CHASE;
  }
  becomeScared(ghost) {
    if (
      ghost.ghostmode === GHOSTMODE.CHASE ||
      ghost.ghostmode === GHOSTMODE.SCATTER ||
      ghost.ghostmode === GHOSTMODE.SCARED
    ) {
      ghost.ghostmode = GHOSTMODE.SCARED;
      if (this.game.currentLevel < 5) {
        this.scaredTime = 20000;
      } else if (this.game.currentLevel < 10) {
        this.scaredTime = 15000;
      } else if (this.game.currentLevel < 15) {
        this.scaredTime = 10000;
      } else if (this.game.currentLevel < 20) {
        this.scaredTime = 5000;
      } else {
        this.scaredTime = 0;
      }
      ghost.scaredTimeout = new Timer(
        this.game,
        this.scaredTime,
        "Scared Timer " + ghost.ghostname
      );
      ghost.scaredTimeout.addTimer();
    } else {
      return;
    }
  }
}
