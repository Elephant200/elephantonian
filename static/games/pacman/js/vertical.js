export default class Vertical {
  constructor(game, topPosition, height, pcp = false, gcp = false) {
    this.type = "V";
    this.game = game;
    this.pcp = pcp;
    this.gcp = gcp;
    this.topPosition = { x: topPosition.x, y: topPosition.y };
    this.bottomPosition = {
      x: topPosition.x,
      y: this.topPosition.y + height
    };
    this.xPosition = this.topPosition.x;
    this.yPosition = this.topPosition.y;
    this.height = height;
  }

  update(deltaTime) {
    // check on Pacman
    if (!this.pcp) {
      this.updatePacman();
    }
    // check on ghost
    if (!this.gcp) {
      this.game.ghosts.forEach((ghost) => this.updateGhost(ghost));
    }
  }

  draw(ctx) {}

  updatePacman() {
    if (this.game.pacman.direction === 1) {
      if (
        this.game.pacman.position.x - this.game.pacman.size / 2 <
          this.xPosition - this.game.pacman.maxSpeed ||
        this.game.pacman.position.y + this.game.pacman.maxSpeed <
          this.yPosition - this.game.pacman.size + 1 ||
        this.game.pacman.position.y >
          this.yPosition +
            this.height +
            this.game.pacman.size -
            1 -
            this.game.pacman.maxSpeed
      ) {
        return;
      } else if (
        this.game.pacman.position.x - this.xPosition <
        this.game.pacman.size + 1
      ) {
        this.game.pacman.position.x =
          this.xPosition + this.game.pacman.size + this.game.pacman.maxSpeed;
      }
    }
    if (this.game.pacman.direction === 0) {
      if (
        this.game.pacman.position.x + this.game.pacman.size / 2 >
          this.xPosition + this.game.pacman.maxSpeed ||
        this.game.pacman.position.y + this.game.pacman.maxSpeed <
          this.yPosition - this.game.pacman.size + 1 ||
        this.game.pacman.position.y >
          this.yPosition +
            this.height +
            this.game.pacman.size -
            1 -
            this.game.pacman.maxSpeed
      ) {
        return;
      } else if (
        this.game.pacman.position.x - this.xPosition >
        -this.game.pacman.size - 1
      ) {
        this.game.pacman.position.x =
          this.xPosition - this.game.pacman.maxSpeed - this.game.pacman.size;
      }
    }
    if (this.game.pacman.direction === 2) {
      if (
        this.game.pacman.position.y - this.game.pacman.size / 2 <
          this.yPosition - this.game.pacman.maxSpeed + this.height ||
        this.game.pacman.position.x <
          this.xPosition - this.game.pacman.size - 1 ||
        this.game.pacman.position.x > this.xPosition + this.game.pacman.size + 1
      ) {
        return;
      } else if (
        this.game.pacman.position.y - this.yPosition - this.height <
        this.game.pacman.size + 1
      ) {
        this.game.pacman.position.y =
          this.yPosition +
          this.height +
          this.game.pacman.size +
          this.game.pacman.maxSpeed;
      } else {
      }
    }
    if (this.game.pacman.direction === 3) {
      if (
        this.game.pacman.position.y + this.game.pacman.size / 2 >
          this.yPosition + this.game.pacman.maxSpeed ||
        this.game.pacman.position.x <
          this.xPosition - this.game.pacman.size - 1 ||
        this.game.pacman.position.x > this.xPosition + this.game.pacman.size + 1
      ) {
        return;
      } else if (
        this.game.pacman.position.y - this.yPosition >
        -this.game.pacman.size - 1
      ) {
        this.game.pacman.position.y =
          this.yPosition - this.game.pacman.size - this.game.pacman.maxSpeed;
      }
    }
  }
  updateGhost(ghost) {
    /*
    if (ghost.direction === 1) {
      if (
        ghost.position.x + 1 < this.xPosition - ghost.maxSpeed ||
        ghost.position.y < this.yPosition ||
        ghost.position.y > this.yPosition + this.height
      ) {
        return;
      } else if (ghost.position.x - this.xPosition < ghost.width / 2 + 1) {
        ghost.position.x = this.xPosition + 1;
      }
    }
    if (ghost.direction === 0) {
      if (
        ghost.position.x + ghost.width - 1 > this.xPosition + ghost.maxSpeed ||
        ghost.position.y < this.yPosition ||
        ghost.position.y > this.yPosition + this.height
      ) {
        return;
      } else if (ghost.position.x - this.xPosition > -ghost.width - 1) {
        ghost.position.x = this.xPosition - ghost.width - 1;
      }
    }
    */
  }
}
