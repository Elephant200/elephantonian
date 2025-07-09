export default class Portals {
  constructor(sysDraw, game) {
    this.game = game;
    this.sysDraw = sysDraw;
    this.portalSize = 125;
    this.topPortal = {
      xLeft: game.gameWidth / 2 - this.portalSize / 2,
      xRight: game.gameWidth / 2 + this.portalSize / 2,
      yTop: 0,
      yBottom: 5
    };
    this.bottomPortal = {
      xLeft: game.gameWidth / 2 - this.portalSize / 2,
      xRight: game.gameWidth / 2 + this.portalSize / 2,
      yTop: game.gameHeight - 5,
      yBottom: game.gameHeight
    };
    this.leftPortal = {
      xLeft: 0,
      xRight: 5,
      yTop: game.gameHeight / 2 - this.portalSize / 2,
      yBottom: game.gameHeight / 2 + this.portalSize / 2
    };
    this.rightPortal = {
      xLeft: game.gameWidth - 5,
      xRight: game.gameWidth,
      yTop: game.gameHeight / 2 - this.portalSize / 2,
      yBottom: game.gameHeight / 2 + this.portalSize / 2
    };
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.topPortal.xLeft, this.topPortal.yTop, this.portalSize, 5);
    ctx.fillRect(
      this.bottomPortal.xLeft,
      this.bottomPortal.yTop,
      this.portalSize,
      5
    );
    ctx.fillRect(
      this.leftPortal.xLeft,
      this.leftPortal.yTop,
      5,
      this.portalSize
    );
    ctx.fillRect(
      this.rightPortal.xLeft,
      this.rightPortal.yTop,
      5,
      this.portalSize
    );
  }
}
