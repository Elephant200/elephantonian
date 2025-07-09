import { Timer } from "./ghost.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  GAMEMOVER: 2,
  MENU: 3,
  NEXTLEVEL: 4
};

export default class Timers {
  constructor(game) {
    this.game = game;
    this.runningTimers = [];
    this.lastTime = 0;
  }

  timerLoop() {
    if (this.game.gamestate === GAMESTATE.RUNNING) {
      this.runningTimers.forEach((timer) => this.decrementTimer(timer));
      setTimeout(() => this.timerLoop(), 1000);
    } else {
      setTimeout(() => this.timerLoop(), 1000);
    }

    this.runningTimers.forEach((timer) =>
      timer.milliseconds < 0 ? timer.removeTimer() : (timer.milliseconds += 0)
    );
  }

  decrementTimer(timer) {
    timer.milliseconds -= 1000;
    console.log("Timer " + timer.id + " decremented");
    console.log("Now remaining: " + timer.milliseconds + " ms");
    timer.milliseconds < 0 ? timer.removeTimer() : (timer.milliseconds += 0);
  }
}
