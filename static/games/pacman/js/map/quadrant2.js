import Horizontal from "../horizontal.js";
import Vertical from "../vertical.js";
// DISTANCE BETWEEN PELLETS: 61px

export class Horizontals2 {
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
      this.game.gameHeight - 1.5 * this.pd,
      2 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 4.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        2 * this.pd,
        false,
        true
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0.75 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 1.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      this.game.gameHeight - 6.5 * this.pd,
      0.75 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 1.5 * this.pd,
          y: this.game.gameHeight - 6.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );

    ctx.strokeStyle = "rgb(100,100,255)";
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        this.pd,
        true,
        false
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      this.game.gameHeight - 1.75 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: this.game.gameHeight - 1.75 * this.pd
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
      this.game.gameHeight - 2.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 3.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      2 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 3.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      this.game.gameHeight - 4.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 4.5 * this.pd,
          y: this.game.gameHeight - 4.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      this.game.gameHeight - 6.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 2.5 * this.pd,
          y: this.game.gameHeight - 6.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      this.game.gameHeight - 5.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: this.game.gameHeight - 5.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 6.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 6.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      this.game.gameHeight - 4.5 * this.pd,
      1.45 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: this.game.gameWidth - 1.5 * this.pd,
          y: this.game.gameHeight - 4.5 * this.pd
        },
        1.45 * this.pd
      )
    );
  }
}

export class Verticals2 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "rgb(240,240,0)";
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      this.game.gameHeight - 0.8 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: this.game.gameHeight - 0.8 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      this.game.gameHeight - 0.8 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 3.5 * this.pd,
          y: this.game.gameHeight - 0.8 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 1.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 2.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 4.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 6.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      0,
      1.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 6.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        1.75 * this.pd,
        false,
        true
      )
    );

    ctx.strokeStyle = "white";
    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 2.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      this.game.gameWidth - 7.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 7.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 7.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 7.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 5.5 * this.pd,
      this.game.gameHeight - 4.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 5.5 * this.pd,
          y: this.game.gameHeight - 4.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 4.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 3.5 * this.pd,
      this.game.gameHeight - 6.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 3.5 * this.pd,
          y: this.game.gameHeight - 6.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 2.5 * this.pd,
      this.game.gameHeight - 5.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 2.5 * this.pd,
          y: this.game.gameHeight - 5.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      this.game.gameHeight - 7.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 1.5 * this.pd,
          y: this.game.gameHeight - 7.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 4.5 * this.pd,
      this.game.gameHeight - 5.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 4.5 * this.pd,
          y: this.game.gameHeight - 5.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      this.game.gameWidth - 1.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: this.game.gameWidth - 1.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        1 * this.pd
      )
    );
  }
}
