import Horizontal from "../horizontal.js";
import Vertical from "../vertical.js";
// DISTANCE BETWEEN PELLETS: 61px

export class ScoreBox {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }

  draw(ctx) {
    this.boxHeight = 4.5 * this.pd;
    this.boxWidth = 1.5 * this.pd;
    this.boxTop = 0;
    this.boxBottom = this.boxHeight;
    this.boxRight = this.game.gameWidth;
    this.boxLeft = this.game.gameWidth - this.boxWidth;
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.boxLeft, this.boxTop, this.boxWidth, this.boxHeight);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.boxLeft, y: this.boxTop },
        this.boxWidth
      )
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.boxLeft, y: this.boxBottom },
        this.boxWidth
      )
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.boxLeft, y: this.boxTop },
        this.boxHeight
      )
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.boxRight, y: this.boxTop },
        this.boxHeight
      )
    );

    // remove pellets in the rectangle

    this.game.pellets.forEach((pellet) => this.testInBox(pellet));

    ctx.font = "20px monospace";

    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    if (this.game.score >= 1000000) {
      ctx.fillText(
        "Wow",
        this.boxLeft + this.boxWidth / 2 - 25,
        this.boxHeight / 2 - 50
      );
      ctx.fillText(
        "you",
        this.boxLeft + this.boxWidth / 2 - 25,
        this.boxHeight / 2 - 25
      );
      ctx.fillText(
        "are",
        this.boxLeft + this.boxWidth / 2 - 25,
        this.boxHeight / 2
      );
      ctx.fillText(
        "good",
        this.boxLeft + this.boxWidth / 2 - 25,
        this.boxHeight / 2 + 25
      );
      ctx.fillText(
        "at",
        this.boxLeft + this.boxWidth / 2 - 25,
        this.boxHeight / 2 + 50
      );
      ctx.fillText(
        "this!",
        this.boxLeft + this.boxWidth / 2 - 25,
        this.boxHeight / 2 + 75
      );
    } else {
      ctx.fillText(
        "S",
        this.boxLeft + this.boxWidth / 2 - 5,
        this.boxHeight / 2 - 75
      );
      ctx.fillText(
        "C",
        this.boxLeft + this.boxWidth / 2 - 5,
        this.boxHeight / 2 - 50
      );
      ctx.fillText(
        "O",
        this.boxLeft + this.boxWidth / 2 - 5,
        this.boxHeight / 2 - 25
      );
      ctx.fillText(
        "R",
        this.boxLeft + this.boxWidth / 2 - 5,
        this.boxHeight / 2
      );
      ctx.fillText(
        "E",
        this.boxLeft + this.boxWidth / 2 - 5,
        this.boxHeight / 2 + 25
      );
      ctx.font = "40px monospace";
      if (this.game.score < 10) {
        ctx.fillText(
          this.game.score,
          this.boxLeft + this.boxWidth / 2 - 10,
          this.boxHeight / 2 + 3 * 25
        );
      } else if (this.game.score >= 10 && this.game.score < 100) {
        ctx.fillText(
          this.game.score,
          this.boxLeft + this.boxWidth / 2 - 20,
          this.boxHeight / 2 + 3 * 25
        );
      } else if (this.game.score >= 100 && this.game.score < 1000) {
        ctx.fillText(
          this.game.score,
          this.boxLeft + this.boxWidth / 2 - 35,
          this.boxHeight / 2 + 3 * 25
        );
      } else if (this.game.score >= 1000 && this.game.score < 10000) {
        ctx.font = "30px monospace";
        ctx.fillText(
          this.game.score,
          this.boxLeft + this.boxWidth / 2 - 35,
          this.boxHeight / 2 + 3 * 25
        );
      } else if (this.game.score >= 10000 && this.game.score < 100000) {
        ctx.font = "25px monospace";
        ctx.fillText(
          this.game.score,
          this.boxLeft + this.boxWidth / 2 - 35,
          this.boxHeight / 2 + 3 * 25
        );
      } else if (this.game.score >= 100000 && this.game.score < 1000000) {
        ctx.font = "20px monospace";
        ctx.fillText(
          this.game.score,
          this.boxLeft + this.boxWidth / 2 - 35,
          this.boxHeight / 2 + 3 * 25
        );
      }
    }
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

export class Horizontals1 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "rgb(240, 240, 0)";
    // Special lines
    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      1.5 * this.pd,
      2 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 4.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd,
        false,
        true
      )
    );

    ctx.strokeStyle = "rgb(100,100,255)";
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      2.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: 2.5 * this.pd
        },
        this.pd,
        true,
        false
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      1.75 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: 1.75 * this.pd
        },
        this.pd,
        true,
        false
      )
    );
    // Regular Lines
    ctx.strokeStyle = "white";
    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      2.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 3.5 * this.pd, y: 2.5 * this.pd },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      3.5 * this.pd,
      2 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 3.5 * this.pd, y: 3.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      4.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 4.5 * this.pd, y: 4.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      5.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 5.5 * this.pd, y: 5.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      6.5 * this.pd,
      0.75 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 1.5 * this.pd, y: 6.5 * this.pd },
        0.75 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 6.5 * this.pd,
      3.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: this.game.gameWidth - 6.5 * this.pd, y: 3.5 * this.pd },
        1 * this.pd
      )
    );
  }
}

export class Verticals1 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "white";
    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      1.5 * this.pd,
      0,
      1.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 4.5 * this.pd, y: 1.5 * this.pd },
        1.75 * this.pd
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      1.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 2.5 * this.pd, y: 1.5 * this.pd },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 7.5 * this.pd,
      1.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 7.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 6.5 * this.pd,
      2.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 6.5 * this.pd, y: 2.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 7.5 * this.pd,
      1.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 7.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      3.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 5.5 * this.pd, y: 3.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      5.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 3.5 * this.pd, y: 5.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      4.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 2.5 * this.pd, y: 4.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      5.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 1.5 * this.pd, y: 5.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      4.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 4.5 * this.pd, y: 4.5 * this.pd },
        1 * this.pd
      )
    );
    ctx.strokeStyle = "rgb(240,240,0)";
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      0.05 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 5.5 * this.pd, y: 0.05 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 6.5 * this.pd,
      0.75 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 6.5 * this.pd, y: 0.75 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      1.75 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 5.5 * this.pd, y: 1.5 * this.pd },
        1 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      0.75 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 4.5 * this.pd, y: 0.75 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      0.05 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 3.5 * this.pd, y: 0.05 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      0.75 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: this.game.gameWidth - 2.5 * this.pd, y: 0.75 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
  }
}
