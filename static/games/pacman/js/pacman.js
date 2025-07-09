import { detectPacmanGhostCollision } from "./collisions.js";
const GHOSTMODE = {
  SCATTER: 0, // targets specific location outside
  CHASE: 1, // targets pacman
  SCARED: 2, // runs from pacman
  EATEN: 3, // different image, speeds up, targets start position
  DORMANT: 4, // does nothing at start position
  PRESCATTER: 5 // tells the ghost to get out of the ghost box
};

export default class Pacman {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.direction = 0;
    this.game = game;
    this.pd = this.game.pd;
    this.position = {
      x: 2 * this.pd,
      y: this.pd
    };
    this.size = 15;
    this.open = true;
    this.counter = 0;
    this.maxSpeed = 3;
    this.moveRight();
    this.ghostsEaten = 0;
  }
  moveRight() {
    this.direction = 0;
    this.arcStart = 0.25 * Math.PI;
    this.arcEnd = 1.25 * Math.PI;
    this.arc2Start = 0.75 * Math.PI;
    this.arc2End = 1.75 * Math.PI;
    this.speed = {
      x: this.maxSpeed,
      y: 0
    };
  }

  moveLeft() {
    this.direction = 1;
    this.arcStart = 1.25 * Math.PI;
    this.arcEnd = 0.25 * Math.PI;
    this.arc2Start = 1.75 * Math.PI;
    this.arc2End = 0.75 * Math.PI;
    this.speed = {
      x: -this.maxSpeed,
      y: 0
    };
  }

  moveUp() {
    this.direction = 2;
    this.arcStart = 0.25 * Math.PI;
    this.arcEnd = 1.25 * Math.PI;
    this.arc2Start = 1.75 * Math.PI;
    this.arc2End = 0.75 * Math.PI;
    this.speed = {
      x: 0,
      y: -this.maxSpeed
    };
  }

  moveDown() {
    this.direction = 3;
    this.arcStart = 1.25 * Math.PI;
    this.arcEnd = 0.25 * Math.PI;
    this.arc2Start = 0.75 * Math.PI;
    this.arc2End = 1.75 * Math.PI;
    this.speed = {
      x: 0,
      y: this.maxSpeed
    };
  }

  eaten(ghost) {
    if (
      ghost.ghostmode == GHOSTMODE.SCATTER ||
      ghost.ghostmode == GHOSTMODE.CHASE
    ) {
      this.game.lives--;
      this.position = { x: 2 * this.pd, y: this.pd };
      this.game.ghosts.forEach(
        (ghost) => (ghost.position.x = ghost.startPosition.x)
      );
      this.game.ghosts.forEach(
        (ghost) => (ghost.position.y = ghost.startPosition.y)
      );
    } else if (ghost.ghostmode == GHOSTMODE.SCARED) {
      this.ghostsEaten++;
      this.game.score += this.game.currentLevel * this.ghostsEaten * 20;
      ghost.ghostmode = GHOSTMODE.EATEN;
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.counter++;
    if (this.counter > 19) {
      this.open = !this.open;
      this.counter = 0;
    }
    if (this.position.x < this.size) {
      this.position.x = this.size;
    }
    if (this.position.x + this.size > this.gameWidth) {
      this.position.x = this.gameWidth - this.size;
    }
    if (this.position.y < this.size) {
      this.position.y = this.size;
    }
    if (this.position.y + this.size > this.gameHeight) {
      this.position.y = this.gameHeight - this.size;
    }
    // right portal
    if (
      this.position.x + this.size >
        this.game.sysDraw.portals.rightPortal.xLeft &&
      this.position.y - this.size >
        this.game.sysDraw.portals.rightPortal.yTop &&
      this.position.y + this.size <
        this.game.sysDraw.portals.rightPortal.yBottom &&
      this.direction === 0
    ) {
      this.position = {
        x: this.size,
        y: this.position.y
      };
    }
    // left portal
    if (
      this.position.x - this.size <
        this.game.sysDraw.portals.leftPortal.xRight &&
      this.position.y - this.size > this.game.sysDraw.portals.leftPortal.yTop &&
      this.position.y + this.size <
        this.game.sysDraw.portals.leftPortal.yBottom &&
      this.direction === 1
    ) {
      this.position = {
        x: this.game.gameWidth - this.size,
        y: this.position.y
      };
    }
    // top portal
    if (
      this.position.y - this.size <
        this.game.sysDraw.portals.topPortal.yBottom &&
      this.position.x - this.size > this.game.sysDraw.portals.topPortal.xLeft &&
      this.position.x + this.size <
        this.game.sysDraw.portals.topPortal.xRight &&
      this.direction === 2
    ) {
      this.position = {
        x: this.position.x,
        y: this.game.gameHeight - this.size
      };
    }
    // bottom portal
    if (
      this.position.y + this.size >
        this.game.sysDraw.portals.bottomPortal.yTop &&
      this.position.x - this.size >
        this.game.sysDraw.portals.bottomPortal.xLeft &&
      this.position.x + this.size <
        this.game.sysDraw.portals.bottomPortal.xRight &&
      this.direction === 3
    ) {
      this.position = {
        x: this.position.x,
        y: this.size
      };
    }
    this.game.ghosts.forEach((ghost) =>
      detectPacmanGhostCollision(this, ghost)
        ? this.eaten(ghost)
        : (this.size += 0)
    );
  }

  draw(ctx) {
    if (this.open) {
      ctx.beginPath();
      ctx.arc(
        this.position.x,
        this.position.y,
        this.size,
        this.arcStart,
        this.arcEnd,
        false
      );
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(
        this.position.x,
        this.position.y,
        this.size,
        this.arc2Start,
        this.arc2End,
        false
      );
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.fill();
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(
        this.position.x,
        this.position.y,
        this.size,
        0,
        2 * Math.PI,
        false
      );
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.fill();
    }
  }
}
