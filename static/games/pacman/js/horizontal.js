export default class Horizontal {
  constructor(
    game,
    leftPosition,
    width,
    pcp = false,
    gcp = false,
    upOnly = false
  ) {
    this.type = "H";
    this.game = game;
    this.pcp = pcp;
    this.gcp = gcp;
    this.leftPosition = { x: leftPosition.x, y: leftPosition.y };
    this.rightPosition = {
      x: leftPosition.x + width,
      y: this.leftPosition.y
    };
    this.xPosition = this.leftPosition.x;
    this.yPosition = this.leftPosition.y;
    this.width = width;
    this.upOnly = upOnly;
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

  updatePacman() {
    if (this.game.pacman.direction === 2) {
      if (
        this.game.pacman.position.y - this.game.pacman.size / 2 <
          this.yPosition - this.game.pacman.maxSpeed ||
        this.game.pacman.position.x + this.game.pacman.maxSpeed <
          this.xPosition - this.game.pacman.size + 1 ||
        this.game.pacman.position.x >
          this.xPosition +
            this.width +
            this.game.pacman.size -
            1 -
            this.game.pacman.maxSpeed
      ) {
        return;
      } else if (
        this.game.pacman.position.y - this.yPosition <
        this.game.pacman.size + 1
      ) {
        this.game.pacman.position.y =
          this.yPosition + this.game.pacman.size + this.game.pacman.maxSpeed;
      }
    }
    if (this.game.pacman.direction === 3) {
      if (
        this.game.pacman.position.y + this.game.pacman.size / 2 >
          this.yPosition + this.game.pacman.maxSpeed ||
        this.game.pacman.position.x + this.game.pacman.maxSpeed <
          this.xPosition - this.game.pacman.size + 1 ||
        this.game.pacman.position.x >
          this.xPosition +
            this.width +
            this.game.pacman.size -
            1 -
            this.game.pacman.maxSpeed
      ) {
        return;
      } else if (
        this.game.pacman.position.y - this.yPosition >
        -this.game.pacman.size - 1
      ) {
        this.game.pacman.position.y =
          this.yPosition - this.game.pacman.maxSpeed - this.game.pacman.size;
      }
    }
    /* 
    if (this.game.pacman.direction === 0) {
      if (
        this.game.pacman.position.x + this.game.pacman.size + 1 >
          this.xPosition + this.game.pacman.maxSpeed &&
        this.game.pacman.position.y < this.yPosition + 5 &&
        this.game.pacman.position.y > this.yPosition - 5
      ) {
        this.game.pacman.position.x =
          this.xPosition - this.game.pacman.size - 1;
      }
    }
    */

    if (this.game.pacman.direction === 1) {
      if (
        //if left side of pacman is left of the right side of the line, minus pacman's speed
        this.game.pacman.position.x - this.game.pacman.size / 2 <
          this.xPosition - this.game.pacman.maxSpeed + this.width ||
        //if the
        this.game.pacman.position.y <
          this.yPosition - this.game.pacman.size - 1 ||
        this.game.pacman.position.y > this.yPosition + this.game.pacman.size + 1
      ) {
        return;
      } else if (
        this.game.pacman.position.x - this.xPosition - this.width <
        this.game.pacman.size + 1
      ) {
        this.game.pacman.position.x =
          this.xPosition +
          this.width +
          this.game.pacman.size +
          this.game.pacman.maxSpeed;
      } else {
      }
    }
    if (this.game.pacman.direction === 0) {
      if (
        this.game.pacman.position.x + this.game.pacman.size / 2 >
          this.xPosition + this.game.pacman.maxSpeed ||
        this.game.pacman.position.y <
          this.yPosition - this.game.pacman.size - 1 ||
        this.game.pacman.position.y > this.yPosition + this.game.pacman.size + 1
      ) {
        return;
      } else if (
        this.game.pacman.position.x - this.xPosition >
        -this.game.pacman.size - 1
      ) {
        this.game.pacman.position.x =
          this.xPosition - this.game.pacman.size - this.game.pacman.maxSpeed;
      }
    }
  }

  updateGhost(ghost) {
    /*
    if (ghost.direction === 2) {
      if (
        ghost.position.y - ghost.height + 1 < this.yPosition - ghost.maxSpeed ||
        ghost.position.x < this.xPosition ||
        ghost.position.x > this.xPosition + this.width
      ) {
        return;
      } else if (ghost.position.y - this.yPosition < ghost.height + 1) {
        ghost.position.y = this.yPosition + ghost.height + 1;
      }
    }
    if (ghost.direction === 3) {
      if (
        ghost.position.y + ghost.height - 1 > this.yPosition + ghost.maxSpeed ||
        ghost.position.x < this.xPosition ||
        ghost.position.x > this.xPosition + this.width
      ) {
        return;
      } else if (ghost.position.y - this.yPosition > -ghost.height - 1) {
        ghost.position.y = this.yPosition - ghost.height - 1;
      }
      
    }
    */
  }
}
