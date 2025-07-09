import Horizontal from "../horizontal.js";
import Vertical from "../vertical.js";

export default class GhostBox {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }

  draw(ctx) {
    this.boxSize = this.pd * 4;
    this.boxTop = this.game.gameHeight / 2 - this.boxSize / 2;
    this.boxBottom = this.game.gameHeight / 2 + this.boxSize / 2;
    this.boxRight = this.game.gameWidth / 2 + this.boxSize / 2;
    this.boxLeft = this.game.gameWidth / 2 - this.boxSize / 2;
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.boxLeft, this.boxTop, this.boxSize, this.boxSize);
    ctx.strokeStyle = "rgb(240, 240, 0)";
    ctx.strokeRect(this.boxLeft, this.boxTop - 1, 4 * this.game.pd, 2);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.boxLeft, y: this.boxTop },
        4 * this.game.pd,
        false,
        true,
        true
      )
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.boxLeft, y: this.boxBottom },
        this.boxSize
      )
    );
    this.game.lines.push(
      new Vertical(this.game, { x: this.boxLeft, y: this.boxTop }, this.boxSize)
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.boxRight, y: this.boxTop },
        this.boxSize
      )
    );

    // remove pellets in the rectangle

    this.game.pellets.forEach((pellet) => this.testInBox(pellet));
  }

  testInBox(pellet) {
    if (
      pellet.position.x > this.boxLeft &&
      pellet.position.x < this.boxRight &&
      pellet.position.y > this.boxTop &&
      pellet.position.y < this.boxBottom
    ) {
      pellet.gone = true;
    }
  }
}
