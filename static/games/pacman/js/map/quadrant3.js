import Horizontal from "../horizontal.js";
import Vertical from "../vertical.js";
// DISTANCE BETWEEN PELLETS: 61px

export class Horizontals3 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "rgb(240, 240, 0)";
    // Special lines
    ctx.strokeRect(
      2.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      2 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 2.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        2 * this.pd,
        false,
        true
      )
    );

    ctx.strokeRect(
      0.75 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0.75 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 0.75 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );

    ctx.strokeRect(
      0.75 * this.pd,
      this.game.gameHeight - 6.5 * this.pd,
      0.75 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 0.75 * this.pd,
          y: this.game.gameHeight - 6.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeStyle = "rgb(100,100,255)";
    ctx.strokeRect(
      4.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 4.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        this.pd,
        true,
        false
      )
    );
    ctx.strokeRect(
      4.5 * this.pd,
      this.game.gameHeight - 1.75 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 4.5 * this.pd,
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
      2.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 2.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      1.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      2 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 1.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      3.5 * this.pd,
      this.game.gameHeight - 4.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 3.5 * this.pd,
          y: this.game.gameHeight - 4.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      4.5 * this.pd,
      this.game.gameHeight - 5.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 4.5 * this.pd,
          y: this.game.gameHeight - 5.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      1.5 * this.pd,
      this.game.gameHeight - 6.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 1.5 * this.pd,
          y: this.game.gameHeight - 6.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      5.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 5.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      5.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      1 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 5.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      0.05 * this.pd,
      this.game.gameHeight - 4.5 * this.pd,
      1.45 * this.pd,
      0
    );
    this.game.lines.push(
      new Horizontal(
        this.game,
        {
          x: 0.05 * this.pd,
          y: this.game.gameHeight - 4.5 * this.pd
        },
        1.45 * this.pd
      )
    );
  }
}

export class Verticals3 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "rgb(240,240,0)";
    ctx.strokeRect(
      1.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 1.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      6.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      0,
      1.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 6.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        1.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      2.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 2.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      4.5 * this.pd,
      this.game.gameHeight - 1.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 4.5 * this.pd,
          y: this.game.gameHeight - 1.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      5.5 * this.pd,
      this.game.gameHeight - 0.8 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 5.5 * this.pd,
          y: this.game.gameHeight - 0.8 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      3.5 * this.pd,
      this.game.gameHeight - 0.8 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 3.5 * this.pd,
          y: this.game.gameHeight - 0.8 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(
      5.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      0,
      0.75 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 5.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeStyle = "white";
    ctx.strokeRect(
      7.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 7.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      7.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 7.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      5.5 * this.pd,
      this.game.gameHeight - 4.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 5.5 * this.pd,
          y: this.game.gameHeight - 4.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      4.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 4.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      3.5 * this.pd,
      this.game.gameHeight - 6.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 3.5 * this.pd,
          y: this.game.gameHeight - 6.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      2.5 * this.pd,
      this.game.gameHeight - 2.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 2.5 * this.pd,
          y: this.game.gameHeight - 2.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      2.5 * this.pd,
      this.game.gameHeight - 5.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 2.5 * this.pd,
          y: this.game.gameHeight - 5.5 * this.pd
        },
        1 * this.pd
      )
    );

    ctx.strokeRect(
      1.5 * this.pd,
      this.game.gameHeight - 7.5 * this.pd,
      0,
      2 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 1.5 * this.pd,
          y: this.game.gameHeight - 7.5 * this.pd
        },
        2 * this.pd
      )
    );

    ctx.strokeRect(
      4.5 * this.pd,
      this.game.gameHeight - 5.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 4.5 * this.pd,
          y: this.game.gameHeight - 5.5 * this.pd
        },
        1 * this.pd
      )
    );
    ctx.strokeRect(
      1.5 * this.pd,
      this.game.gameHeight - 3.5 * this.pd,
      0,
      1 * this.pd
    );
    this.game.lines.push(
      new Vertical(
        this.game,
        {
          x: 1.5 * this.pd,
          y: this.game.gameHeight - 3.5 * this.pd
        },
        1 * this.pd
      )
    );
  }
}
