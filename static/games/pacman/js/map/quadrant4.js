import Horizontal from "../horizontal.js";
import Vertical from "../vertical.js";
// DISTANCE BETWEEN PELLETS: 61px

export class LivesBox {
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
    this.boxRight = this.boxWidth;
    this.boxLeft = 0;
    ctx.strokeStyle = "white";
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.boxLeft, this.boxTop, this.boxWidth, this.boxHeight);
    ctx.font = "25px monospace";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Level", this.boxLeft + this.boxWidth / 2 + 3, this.pd * 3.25);
    ctx.strokeRect(this.boxLeft, this.boxTop, this.boxWidth, this.boxHeight);
    if (this.game.currentLevel < 10) {
      ctx.font = "75px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        this.game.currentLevel,
        this.boxLeft + this.boxWidth / 2 + 3,
        this.pd * 4 + 10
      );
    } else if (this.game.currentLevel < 100) {
      ctx.font = "50px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        this.game.currentLevel,
        this.boxLeft + this.boxWidth / 2 + 3,
        this.pd * 4 + 10
      );
    } else if (this.game.currentLevel < 1000) {
      ctx.font = "40px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        this.game.currentLevel,
        this.boxLeft + this.boxWidth / 2 + 3,
        this.pd * 4 + 10
      );
    } else if (this.game.currentLevel < 10000) {
      ctx.font = "25px monospace";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        this.game.currentLevel,
        this.boxLeft + this.boxWidth / 2 + 3,
        this.pd * 4 + 10
      );
    }
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
    // lives remaining
    this.arcStart = 0.25 * Math.PI;
    this.arcEnd = 1.25 * Math.PI;
    this.arc2Start = 0.75 * Math.PI;
    this.arc2End = 1.75 * Math.PI;

    if (this.game.lives > 1) {
      this.drawPacman(ctx, (this.boxWidth * 3) / 10, this.pd);
      if (this.game.lives > 2) {
        this.drawPacman(ctx, (this.boxWidth * 3) / 4, this.pd);
        if (this.game.lives > 3) {
          this.drawPacman(ctx, (this.boxWidth * 3) / 10, this.pd * 2);
          if (this.game.lives > 4) {
            this.drawPacman(ctx, (this.boxWidth * 3) / 4, this.pd * 2);
          }
        }
      }
    }

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
  drawPacman(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, this.game.pacman.size, this.arcStart, this.arcEnd, false);
    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, this.game.pacman.size, this.arc2Start, this.arc2End, false);
    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
    ctx.fillStyle = "rgb(255,255,0)";
    ctx.fill();
  }
}

export class Horizontals4 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "rgb(240, 240, 0)";
    // Special lines
    ctx.strokeRect(2.5 * this.pd, 1.5 * this.pd, 2 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 2.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd,
        false,
        true
      )
    );

    ctx.strokeStyle = "rgb(100,100,255)";
    ctx.strokeRect(4.5 * this.pd, 2.5 * this.pd, 1 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 4.5 * this.pd, y: 2.5 * this.pd },
        1 * this.pd,
        true,
        false
      )
    );
    ctx.strokeRect(4.5 * this.pd, 1.75 * this.pd, 1 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 4.5 * this.pd, y: 1.75 * this.pd },
        1 * this.pd,
        true,
        false
      )
    );
    // Regular Lines
    ctx.strokeStyle = "white";
    ctx.strokeRect(1.5 * this.pd, 3.5 * this.pd, 2 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 1.5 * this.pd, y: 3.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(3.5 * this.pd, 4.5 * this.pd, 1 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 3.5 * this.pd, y: 4.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(4.5 * this.pd, 5.5 * this.pd, 1 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 4.5 * this.pd, y: 5.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(5.5 * this.pd, 3.5 * this.pd, 1 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 5.5 * this.pd, y: 3.5 * this.pd },
        1 * this.pd
      )
    );
    ctx.strokeRect(2.5 * this.pd, 2.5 * this.pd, 1 * this.pd, 0);
    this.game.lines.push(
      new Horizontal(
        this.game,
        { x: 2.5 * this.pd, y: 2.5 * this.pd },
        1 * this.pd
      )
    );
  }
}

export class Verticals4 {
  constructor(sysDraw, game) {
    this.sysDraw = sysDraw;
    this.game = game;
    this.pd = this.game.pd;
  }
  draw(ctx) {
    ctx.strokeStyle = "rgb(240,240,0)";
    ctx.strokeRect(5.5 * this.pd, 0.05 * this.pd, 0, 0.75 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 5.5 * this.pd, y: 0.05 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(3.5 * this.pd, 0.05 * this.pd, 0, 0.75 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 3.5 * this.pd, y: 0.05 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(6.5 * this.pd, 0.75 * this.pd, 0, 0.75 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 6.5 * this.pd, y: 0.75 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(2.5 * this.pd, 0.75 * this.pd, 0, 1 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 2.5 * this.pd, y: 0.75 * this.pd },
        1 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(4.5 * this.pd, 0.75 * this.pd, 0, 0.75 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 4.5 * this.pd, y: 0.75 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeRect(5.5 * this.pd, 1.75 * this.pd, 0, 0.75 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 5.5 * this.pd, y: 1.75 * this.pd },
        0.75 * this.pd,
        false,
        true
      )
    );
    ctx.strokeStyle = "white";
    ctx.strokeRect(7.5 * this.pd, 1.5 * this.pd, 0, 2 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 7.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(6.5 * this.pd, 2.5 * this.pd, 0, 1 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 6.5 * this.pd, y: 2.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(7.5 * this.pd, 1.5 * this.pd, 0, 2 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 7.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(5.5 * this.pd, 3.5 * this.pd, 0, 1 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 5.5 * this.pd, y: 3.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(4.5 * this.pd, 1.5 * this.pd, 0, 2 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 4.5 * this.pd, y: 1.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(3.5 * this.pd, 5.5 * this.pd, 0, 1 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 3.5 * this.pd, y: 5.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(2.5 * this.pd, 1.75 * this.pd, 0, 0.75 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 2.5 * this.pd, y: 1.75 * this.pd },
        0.75 * this.pd
      )
    );

    ctx.strokeRect(2.5 * this.pd, 4.5 * this.pd, 0, 1 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 2.5 * this.pd, y: 4.5 * this.pd },
        1 * this.pd
      )
    );

    ctx.strokeRect(1.5 * this.pd, 5.5 * this.pd, 0, 2 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 1.5 * this.pd, y: 5.5 * this.pd },
        2 * this.pd
      )
    );

    ctx.strokeRect(4.5 * this.pd, 4.5 * this.pd, 0, 1 * this.pd);
    this.game.lines.push(
      new Vertical(
        this.game,
        { x: 4.5 * this.pd, y: 4.5 * this.pd },
        1 * this.pd
      )
    );
  }
}
