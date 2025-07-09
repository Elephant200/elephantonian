import InputHandler from "./input.js";
import Pacman from "./pacman.js";
import SysDraw from "./sysdraw.js";
import { buildLevel } from "./generate.js";
import { Ghost, Pinkie, Clyde, Inkie } from "./ghost.js";
import Timers from "./timers.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  GAMEMOVER: 2,
  MENU: 3,
  NEXTLEVEL: 4
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.pd = 61;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.pacman = new Pacman(this);
    this.timers = new Timers(this);
    this.timers.timerLoop();
    this.lives = 5;
    this.prescore = 0;
    this.score = 0;
    this.scoreTonNextLevel = 50;
    this.currentLevel = 1;
    this.pellets = [];
    this.ghosts = [];
    this.blinkie = new Ghost(
      this,
      {
        x: 8 * this.pd,
        y: 5 * this.pd
      },
      { x: this.gameWidth - 3 * this.pd, y: this.pd },
      2
    );
    this.pinkie = new Pinkie(
      this,
      {
        x: 7 * this.pd,
        y: 5 * this.pd
      },
      { x: this.gameWidth - 2 * this.pd, y: this.pd },
      2
    );
    this.clyde = new Clyde(
      this,
      {
        x: 9 * this.pd,
        y: 5 * this.pd
      },
      { x: this.gameWidth - 4 * this.pd, y: this.pd },
      2
    );
    this.inkie = new Inkie(
      this,
      { x: 10 * this.pd, y: 5 * this.pd },
      { x: this.gameWidth - 5 * this.pd, y: this.pd },
      this.blinkie,
      2
    );
    this.ghosts.push(this.blinkie);
    this.ghosts.push(this.pinkie);
    this.ghosts.push(this.clyde);
    this.ghosts.push(this.inkie);
    new InputHandler(this);
    this.sysDraw = new SysDraw(this);
    this.lines = [];
  }

  start() {
    if (
      this.gamestate !== GAMESTATE.MENU &&
      this.gamestate !== GAMESTATE.NEXTLEVEL
    ) {
      return;
    } else {
      this.gamestate = GAMESTATE.RUNNING;
      this.pellets = buildLevel(16, 12, this);
    }
  }

  update(deltaTime) {
    if (this.lives <= 0) {
      this.gamestate = GAMESTATE.GAMEOVER;
    }
    if (this.gamestate === GAMESTATE.RUNNING && this.pellets.length < 1) {
      this.pellets = buildLevel(16, 12, this);
      this.gamestate = GAMESTATE.NEXTLEVEL;
    }
    if (
      this.gamestate === GAMESTATE.RUNNING &&
      this.score >= this.prescore + this.scoreTonNextLevel
    ) {
      this.currentLevel++;
      if (this.currentLevel <= 5) {
        this.pacman.maxSpeed += 0.5;
        this.ghosts.forEach((ghost) => (ghost.maxSpeed += 0.5));
      }
      if (this.currentLevel <= 10) {
        this.scoreTonNextLevel += 5;
      } else if (this.currentLevel <= 20) {
        this.scoreTonNextLevel += 20;
      } else if (this.currentLevel <= 30) {
        this.scoreTonNextLevel += 100;
      } else if (this.currentLevel <= 50) {
        this.scoreTonNextLevel += 1000;
      } else if (this.currentLevel <= 100) {
        this.scoreTonNextLevel += 2000;
      } else {
        this.scoreTonNextLevel += 10000;
      }

      this.prescore = this.score;

      if (this.currentLevel <= 8) {
        // make another ghost wake up
      }
    }
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    ) {
      return;
    }
    this.pacman.update(deltaTime);
    this.pellets = this.pellets.filter((pellet) => !pellet.gone);
    this.pellets.forEach((pellet) => pellet.update(deltaTime));
    this.lines.forEach((line) => line.update(deltaTime));
    this.ghosts.forEach((ghost) => ghost.update(deltaTime));
  }

  draw(ctx) {
    ctx.fillStyle = "rgb(0,0,50)";
    ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
    this.sysDraw.draw(ctx);
    this.pacman.draw(ctx);
    this.pellets.forEach((pellet) => pellet.draw(ctx));
    this.ghosts.forEach((ghost) => ghost.draw(ctx));
    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 255, 0.25)";
      ctx.fill();

      ctx.font = "30px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gamestate === GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 75, 200, 0.75)";
      ctx.fill();

      ctx.font = "100px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", this.gameWidth / 2, 200);
      ctx.font = "50px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        `Final Score: ${this.score}`,
        this.gameWidth / 2,
        this.gameHeight / 2
      );
      ctx.font = "30px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "Reload to play again",
        this.gameWidth / 2,
        this.gameHeight / 2 + 50
      );
    }
    if (this.gamestate === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 75, 200, 1)";
      ctx.fill();

      ctx.font = "80px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "Press SPACE to start",
        this.gameWidth / 2,
        this.gameHeight / 4
      );
      ctx.font = "25px monospace";
      ctx.fillStyle = "rgb(255,25,25)";
      ctx.fillText(
        "WARNING: Depending on your computer,",
        this.gameWidth / 2,
        (this.gameHeight * 3) / 4 + 25
      );
      ctx.fillText(
        "the pacman and ghost's speeds may vary.",
        this.gameWidth / 2,
        (this.gameHeight * 3) / 4 + 2 * 25
      );
    }
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
