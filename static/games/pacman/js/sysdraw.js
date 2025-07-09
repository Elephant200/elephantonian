import Portals from "./map/portals.js";
import GhostBox from "./map/ghostBox.js";
import { Horizontals1, Verticals1, ScoreBox } from "./map/quadrant1.js";
import { Horizontals2, Verticals2 } from "./map/quadrant2.js";
import { Horizontals3, Verticals3 } from "./map/quadrant3.js";
import { Horizontals4, Verticals4, LivesBox } from "./map/quadrant4.js";
import Horizontal from "./horizontal.js";
import Vertical from "./vertical.js";

export default class SysDraw {
  constructor(game) {
    this.game = game;
    this.portals = new Portals(this, this.game);
    this.ghostBox = new GhostBox(this, this.game);
    this.scoreBox = new ScoreBox(this, this.game);
    this.livesBox = new LivesBox(this, this.game);
    this.horizontals1 = new Horizontals1(this, this.game);
    this.verticals1 = new Verticals1(this, this.game);
    this.horizontals2 = new Horizontals2(this, this.game);
    this.verticals2 = new Verticals2(this, this.game);
    this.horizontals3 = new Horizontals3(this, this.game);
    this.verticals3 = new Verticals3(this, this.game);
    this.horizontals4 = new Horizontals4(this, this.game);
    this.verticals4 = new Verticals4(this, this.game);
  }

  draw(ctx) {
    // the box around the area
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.strokeRect(2, 2, this.game.gameWidth - 5, this.game.gameHeight - 5);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 0 + 1 * 2, y: 0 + 1 * 2 },
        this.game.gameWidth - 5
      )
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 2, y: this.game.gameHeight - 2 },
        this.game.gameWidth - 5
      )
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 2, y: this.game.gameWidth - 2 },
        this.game.gameHeight - 5
      )
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 2, y: this.game.gameWidth - 2 },
        this.game.gameHeight - 5
      )
    );

    this.portals.draw(ctx);
    this.ghostBox.draw(ctx);
    this.scoreBox.draw(ctx);
    this.livesBox.draw(ctx);
    this.horizontals1.draw(ctx);
    this.verticals1.draw(ctx);
    this.horizontals2.draw(ctx);
    this.verticals2.draw(ctx);
    this.horizontals3.draw(ctx);
    this.verticals3.draw(ctx);
    this.horizontals4.draw(ctx);
    this.verticals4.draw(ctx);
  }
}
