import { detectHomeCollision, detectHomeCollision2 } from "./collisions.js";
import { BigPellet, GenericPellet } from "./pellet.js";

const GHOSTMODE = {
  SCATTER: 0, // targets specific location outside
  CHASE: 1, // targets pacman
  SCARED: 2, // runs from pacman
  EATEN: 3, // different image, speeds up, targets start position
  DORMANT: 4, // does nothing at start position
  PRESCATTER: 5 // tells the ghost to get out of the ghost box
};

export class Ghost {
  constructor(game, sp, scattertarget, speed = 1) {
    this.game = game;
    this.pd = this.game.pd;
    this.counter = 21;
    this.returnToStart = false;
    this.maintarget = { x: 0, y: 0 };
    this.scattertarget = { x: scattertarget.x, y: scattertarget.y };
    this.scatterpellet = new GenericPellet(this.game, this.scattertarget);
    this.scatterpellet.gone = true;
    this.image = document.getElementById("blinkie");
    this.defaultimage = document.getElementById("blinkie");
    this.scaredimage = document.getElementById("scared");
    this.eatenimage = document.getElementById("blinkieEaten");
    this.height = 30;
    this.width = 30;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.maxSpeed = 2.05 * speed;
    this.ghostmode = GHOSTMODE.SCATTER;
    this.moving = false;
    this.position = { x: 0, y: 0 };
    this.startPosition = { x: sp.x, y: sp.y };
    this.position.x = this.startPosition.x;
    this.position.y = this.startPosition.y;
    this.startPositionPellet = new GenericPellet(this.game, this.startPosition);
    this.startPositionPellet.gone = true;
    this.direction = 0;
    this.speed = { x: 0, y: this.maxSpeed };
    this.ghostName = "blinkie1";
    this.dormantTimeout = new Timer(this, 0, "Null Timer");
    this.scaredTimeout = new Timer(this, 0, "Null Timer");
  }
  moveRight() {
    this.moving = true;
    this.direction = 0;
    this.pdtarget = this.position.x + this.game.pd;
  }

  moveLeft() {
    this.moving = true;
    this.direction = 1;
    this.pdtarget = this.position.x - this.game.pd;
  }

  moveUp() {
    this.moving = true;
    this.direction = 2;
    this.pdtarget = this.position.y - this.game.pd;
  }

  moveDown() {
    this.moving = true;
    this.direction = 3;
    this.pdtarget = this.position.y + this.game.pd;
  }

  draw(ctx) {
    switch (this.ghostmode) {
      case GHOSTMODE.CHASE:
      case GHOSTMODE.SCATTER:
      case GHOSTMODE.DORMANT:
      case GHOSTMODE.PRESCATTER:
        this.maxSpeed = 2.05;
        this.image = this.defaultimage;
        break;
      case GHOSTMODE.EATEN:
        this.maxSpeed = 10.25;
        this.image = this.eatenimage;
        break;
      case GHOSTMODE.SCARED:
        this.maxSpeed = 2.05;
        this.image = this.scaredimage;
        break;
      default:
        break;
    }
    ctx.drawImage(
      this.image,
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.height,
      this.width
    );
  }

  update(deltaTime) {
    if (
      this.startPosition.x != 8 * this.game.pd &&
      this.startPosition.y != 5 * this.game.pd &&
      this.ghostName === "blinkie1"
    ) {
      console.log("New start position (blinkie): ");
      console.log(
        "X: " + this.startPosition.x / this.game.pd,
        "\nY: " + this.startPosition.y / this.game.pd
      );
    }
    if (
      this.startPosition.x != 7 * this.game.pd &&
      this.startPosition.y != 5 * this.game.pd &&
      this.ghostName === "pinkie1"
    ) {
      console.log("New start position (pinkie): ");
      console.log(
        "X: " + this.startPosition.x / this.game.pd,
        "\nY: " + this.startPosition.y / this.game.pd
      );
    }
    if (
      detectHomeCollision(this, this.startPositionPellet) &&
      this.ghostmode === GHOSTMODE.EATEN
    ) {
      console.log("Going to Dormant");
      console.log("X: " + this.position.x / 61 + " Y: " + this.position.y / 61);
      detectHomeCollision2(this, this.startPositionPellet);
      this.ghostmode = GHOSTMODE.DORMANT;
      this.position.x = this.startPosition.x;
      this.position.y = this.startPosition.y;
      this.timeout = 0;
      if (this.game.currentLevel < 3) {
        this.timeout = 8000;
      } else if (this.game.currentLevel < 5) {
        this.timeout = 6000;
      } else if (this.game.currentLevel < 10) {
        this.timeout = 4000;
      } else if (this.game.currentLevel < 15) {
        this.timeout = 3000;
      } else {
        this.timeout =
          (23 - this.game.currentLevel) * 1000 > 0 ? (25 - 20) * 1000 : 0;
      }
      this.dormantTimeout = new Timer(
        this.game,
        this.timeout,
        "Dormant Timeout " + this.ghostName
      );
      this.dormantTimeout.addTimer();
    }
    if (
      this.scaredTimeout.milliseconds < 1000 &&
      this.ghostmode == GHOSTMODE.SCARED
    ) {
      console.log("Switched back to chase");
      this.ghostmode = GHOSTMODE.CHASE;
    }
    if (
      this.dormantTimeout.milliseconds < 1000 &&
      this.ghostmode === GHOSTMODE.DORMANT
    ) {
      this.ghostmode = GHOSTMODE.SCATTER;
    }
    if (
      detectHomeCollision(this, this.scatterpellet) &&
      this.ghostmode === GHOSTMODE.SCATTER
    ) {
      this.ghostmode = GHOSTMODE.CHASE;
    }

    switch (this.direction) {
      case 0:
        if (this.position.x < this.pdtarget) {
          this.speed = { x: this.maxSpeed, y: 0 };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      case 1:
        if (this.position.x > this.pdtarget) {
          this.speed = { x: -this.maxSpeed, y: 0 };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      case 2:
        if (this.position.y > this.pdtarget) {
          this.speed = { x: 0, y: -this.maxSpeed };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      case 3:
        if (this.position.y < this.pdtarget) {
          this.speed = { x: 0, y: this.maxSpeed };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      default:
        break;
    }
    if (this.position.x < 0) {
      this.position.x = 0;
      this.moveRight();
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
      this.moveLeft();
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.speed.y = -this.speed.y;
      this.moveDown();
    }
    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight - this.height;
      this.moveUp();
    }
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.updateTarget();
    }
    if (!this.moving) {
      this.moving = true;
      var way = this.pursueTarget(this.maintarget);
      switch (way) {
        case 0:
          this.moveRight();
          //console.log("Moved");
          break;
        case 1:
          this.moveLeft();
          //console.log("Moved");
          break;
        case 2:
          this.moveUp();
          //console.log("Moved");
          break;
        case 3:
          this.moveDown();
          //console.log("Moved");
          break;
        default:
          break;
      }
    }
    if (this.returnToStart) {
      this.position.x = this.startPosition.x;
      this.position.y = this.startPosition.y;
      this.returnToStart = false;
    }
  }

  updateTarget() {
    switch (this.ghostmode) {
      case GHOSTMODE.CHASE:
        this.maintarget.x = this.game.pacman.position.x;
        this.maintarget.y = this.game.pacman.position.y;
        break;
      case GHOSTMODE.EATEN:
        this.maintarget.x = this.startPosition.x;
        this.maintarget.y = this.startPosition.y;
        break;
      case GHOSTMODE.SCARED:
        this.maintarget.x = this.game.pacman.position.x;
        this.maintarget.y = this.game.pacman.position.y;
        break;
      case GHOSTMODE.SCATTER:
        this.maintarget.x = this.scattertarget.x;
        this.maintarget.y = this.scattertarget.y;
        break;
      case GHOSTMODE.PRESCATTER:
        this.maintarget.x = this.startPosition.x;
        this.maintarget.y = this.startPosition.y - 4 * this.pd;
        break;
      default:
        break;
    }
  }
  pursueTarget(target) {
    if (this.ghostmode == GHOSTMODE.SCARED) {
      var chosenWay = this.evadeTarget(target);
      return chosenWay;
    } else if (this.ghostmode == GHOSTMODE.DORMANT) {
      return null;
    }
    // set the directions
    let directions = [0, 1, 2, 3];
    let removedDir;

    // rule out the direction it came from
    var index = 0;
    if (this.direction === 0) {
      directions.splice(1, 1);
    } else if (this.direction === 1) {
      directions.splice(0, 1);
    } else if (this.direction === 2) {
      directions.splice(3, 1);
    } else if (this.direction === 3) {
      directions.splice(2, 1);
    }
    var directions2 = [...directions];
    // rule out the directions that would make it hit a wall
    for (var j = 0; j < directions2.length; j++) {
      if (this.checkWall(directions2[j])) {
        index = directions.indexOf(directions2[j]);
        removedDir = directions2[j];
        directions.splice(index, 1);
      }
    }

    // check if near edge
    if (this.position.x <= 1.5 * this.pd) {
      if (directions.includes(1)) {
        index = directions.indexOf(1);
        directions.splice(index, 1);
      }
    }
    if (this.position.y <= 1.5 * this.pd) {
      if (directions.includes(2)) {
        index = directions.indexOf(2);
        directions.splice(index, 1);
      }
    }
    if (this.position.y >= this.game.gameHeight - 1.5 * this.pd) {
      if (directions.includes(3)) {
        index = directions.indexOf(3);
        directions.splice(index, 1);
      }
    }
    if (this.position.x >= this.game.gameWidth - 1.5 * this.pd) {
      if (directions.includes(0)) {
        index = directions.indexOf(0);
        directions.splice(index, 1);
      }
    }

    // if there is only one left, return that
    if (directions.length === 1) {
      return directions[0];
    } else if (directions.length === 0) {
      // dead end
      if (this.direction === 0) {
        return 1;
      } else if (this.direction === 1) {
        return 0;
      } else if (this.direction === 2) {
        return 3;
      } else if (this.direction === 3) {
        return 2;
      }
    }
    // find out which x direction will help us
    if (target.x < this.position.x) {
      var xPath = 1;
      var xPathDistance = this.position.x - target.x;
    } else {
      var xPath = 0;
      var xPathDistance = target.x - this.position.x;
    }
    // find out which y direction will help us
    if (target.y < this.position.y) {
      var yPath = 2;
      var yPathDistance = this.position.y - target.y;
    } else {
      var yPath = 3;
      var yPathDistance = target.y - this.position.y;
    }
    // find out which one is a greater distance
    if (xPathDistance >= yPathDistance) {
      if (directions.includes(xPath)) {
        return xPath;
      } else if (directions.includes(yPath)) {
        return yPath;
      } else {
        // randomly genearte
        var chosenWay = Math.random() < 0.5 ? directions[0] : directions[1];
        return chosenWay;
      }
    } else {
      if (directions.includes(yPath)) {
        return yPath;
      } else if (directions.includes(xPath)) {
        return xPath;
      } else {
        // randomly genearte
        var chosenWay = Math.random() < 0.5 ? directions[0] : directions[1];
        return chosenWay;
      }
    }
  }
  evadeTarget(target) {
    let directions = [0, 1, 2, 3];
    //rule out the direction it came from
    var index = 0;
    if (this.direction === 0) {
      index = directions.indexOf(1);
    } else if (this.direction === 1) {
      index = directions.indexOf(0);
    } else if (this.direction === 2) {
      index = directions.indexOf(3);
    } else if (this.direction === 3) {
      index = directions.indexOf(2);
    }
    directions.splice(index, 1);
    //check for a wall
    var directionscopy = [...directions];
    for (var j = 0; j < directionscopy.length; j++) {
      if (this.checkWall(directionscopy[j])) {
        index = directions.indexOf(directionscopy[j]);
        directions.splice(index, 1);
      }
    }
    /* check if near edge: removing */
    if (this.position.x <= 0.9 * this.pd) {
      if (directions.includes(1)) {
        index = directions.indexOf(1);
        directions.splice(index, 1);
      }
    }
    if (this.position.y <= 0.9 * this.pd) {
      if (directions.includes(2)) {
        index = directions.indexOf(2);
        directions.splice(index, 1);
      }
    }
    if (this.position.x >= this.game.gameWidth - this.width - 0.9 * this.pd) {
      if (directions.includes(0)) {
        /*console.log("right wall!");*/
        index = directions.indexOf(0);
        directions.splice(index, 1);
      } else {
        /**/
      }
    } /*else {
      console.log("first should be greater than second");
      console.log(this.position.x);
      console.log(this.game.width - this.width - 2 * this.pd);
    }*/
    if (this.position.y >= this.game.gameHeight - this.height - 0.9 * this.pd) {
      if (directions.includes(3)) {
        /*console.log("bottom wall!");*/
        index = directions.indexOf(3);
        directions.splice(index, 1);
      }
    }
    /**/

    if (directions.length === 1) {
      return directions[0];
    } else if (directions.length === 0) {
      //dead end
      if (this.direction === 0) {
        return 1;
      } else if (this.direction === 1) {
        return 0;
      } else if (this.direction === 2) {
        return 3;
      } else if (this.direction === 3) {
        return 2;
      }
    } else {
      //find out which x direction will help us
      if (target.x < this.position.x) {
        var xPath = 0;
        var xpathDistance = this.position.x - target.x;
      } else {
        var xPath = 1;
        var xpathDistance = target.x - this.position.x;
      }
      //find out which y direciton will help us
      if (target.y < this.position.y) {
        var yPath = 3;
        var ypathDistance = this.position.y - target.y;
      } else {
        var yPath = 2;
        var ypathDistance = target.y - target.y;
      }
      //find out which one is a greater distance
      if (xpathDistance <= ypathDistance) {
        if (directions.includes(xPath)) {
          return xPath;
        } else if (directions.includes(yPath)) {
          return yPath;
        } else {
          //randomly generate
          var chosenWay = Math.random() < 0.5 ? directions[0] : directions[1];
          return chosenWay;
        }
      } else {
        if (directions.includes(yPath)) {
          return yPath;
        } else if (directions.includes(xPath)) {
          return xPath;
        } else if (directions.length > 0) {
          //randomly generate
          var chosenWay = Math.random() < 0.5 ? directions[0] : directions[1];
          return chosenWay;
        }
      }
    }
  }
  checkWall(testdirection) {
    // console.log("Testdirection: " + testdirection);
    if (testdirection === 0 || testdirection === 1) {
      // assess for verticals
      // set wall to false
      var wall = false;
      // iterate through all lines
      for (var i = 0; i < this.game.lines.length; i++) {
        let line = this.game.lines[i];
        // if the line is a vertical and it is not pass
        // the x position will be crossed in the move
        // and the ghost's y position is between the top and bottom of the line
        if (
          line.type === "V" &&
          !line.gcp &&
          this.position.y < line.bottomPosition.y &&
          this.position.y > line.yPosition
        ) {
          //console.log("Success");
          if (
            (testdirection === 0 &&
              this.position.x < line.xPosition &&
              this.position.x + this.pd > line.xPosition) ||
            (testdirection === 1 &&
              this.position.x > line.xPosition &&
              this.position.x - this.pd < line.xPosition)
          ) {
            // set wall to true
            //console.log("Success: Wall found");
            wall = true;
          }
        }
      }
      // console.log("Success: ghost.js check wall method After the first for loop");
      return wall;
    } else if (testdirection === 2 || testdirection === 3) {
      // assess for horizontals
      // set wall to false
      var wall = false;
      // iterate through all lines
      for (var i = 0; i < this.game.lines.length; i++) {
        let line = this.game.lines[i];
        // if the line is a horizontal  and it is not pass
        // the y position will be crossed in the move
        // and the ghost's x position is between the left and right of the line
        /*
        if (
          testdirection === 3 &&
          line.upOnly &&
          !(this.ghostmode === GHOSTMODE.EATEN)
        ) {
          console.log("up only issue detected!");
        } else if (
          line.type === "H" &&
          this.position.x < line.rightPosition.x &&
          this.position.x > line.xPosition &&
          line.upOnly
        ) {
          console.log(this.ghostmode);
          console.log(GHOSTMODE.EATEN);
          console.log(!(this.ghostmode === GHOSTMODE.EATEN));
        }*/
        if (
          //condition 1: it's horizontal
          line.type === "H" &&
          //condition 2: it's ghost can't pass or uponly & we're going down (overided if it's eaten)
          (!line.gcp ||
            (testdirection === 3 &&
              line.upOnly &&
              !(this.ghostmode == GHOSTMODE.EATEN))) &&
          //condition 3: x lines up with the line
          this.position.x < line.rightPosition.x &&
          this.position.x > line.xPosition
        ) {
          //console.log("Success");
          if (
            (testdirection === 3 &&
              this.position.y < line.yPosition &&
              this.position.y + this.pd > line.yPosition) ||
            (testdirection === 2 &&
              this.position.y > line.yPosition &&
              this.position.y - this.pd < line.yPosition)
          ) {
            // set wall to true

            wall = true;
          }
        }
      }

      return wall;
    } else {
    }
  }
}
/* 
PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE
PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE
PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE 
PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE PINKIE 
*/
export class Pinkie extends Ghost {
  constructor(game, startPosition, scattertarget, speed = 1) {
    super(game, startPosition, scattertarget, speed);
    this.image = document.getElementById("pinkie");
    this.defaultimage = document.getElementById("pinkie");
    this.eatenimage = document.getElementById("pinkieEaten");
    this.ghostName === "pinkie1";
    console.log("Pinkie!");
  }
  updateTarget() {
    switch (this.ghostmode) {
      case GHOSTMODE.CHASE:
        var increase = { x: 0, y: 0 };
        if (this.game.pacman.direction === 0) {
          increase.x += this.game.pd;
        } else if (this.game.pacman.direction === 1) {
          increase.x -= this.game.pd;
        } else if (this.game.pacman.direction === 2) {
          increase.y -= this.game.pd;
        } else if (this.game.pacman.direction === 3) {
          increase.y += this.game.pd;
        }
        this.maintarget.x = this.game.pacman.position.x + increase.x;
        this.maintarget.y = this.game.pacman.position.y + increase.y;
        break;
      case GHOSTMODE.EATEN:
        this.maintarget.x = this.startPosition.x;
        this.maintarget.y = this.startPosition.y;
        break;
      case GHOSTMODE.SCARED:
        this.maintarget.x = this.game.pacman.position.x;
        this.maintarget.y = this.game.pacman.position.y;
        break;
      case GHOSTMODE.SCATTER:
        this.maintarget = { x: this.scattertarget.x, y: this.scattertarget.y };
        break;

      default:
        break;
    }
  }
}

export class Clyde extends Ghost {
  constructor(game, startPosition, scattertarget, speed = 1) {
    super(game, startPosition, scattertarget, speed);
    this.image = document.getElementById("clyde");
    this.defaultimage = document.getElementById("clyde");
    this.eatenimage = document.getElementById("clydeEaten");

    this.firstScatter = true;

    console.log("Clyde!");
  }

  update(deltaTime) {
    if (
      this.startPosition.x != 8 * this.game.pd &&
      this.startPosition.y != 5 * this.game.pd &&
      this.ghostName === "blinkie1"
    ) {
      console.log("New start position (blinkie): ");
      console.log(
        "X: " + this.startPosition.x / this.game.pd,
        "\nY: " + this.startPosition.y / this.game.pd
      );
    }
    if (
      this.scaredTimeout.milliseconds < 1000 &&
      this.ghostmode == GHOSTMODE.SCARED
    ) {
      console.log("Switched back to chase");
      this.ghostmode = GHOSTMODE.CHASE;
    }
    if (
      this.startPosition.x != 7 * this.game.pd &&
      this.startPosition.y != 5 * this.game.pd &&
      this.ghostName === "pinkie1"
    ) {
      console.log("New start position (pinkie): ");
      console.log(
        "X: " + this.startPosition.x / this.game.pd,
        "\nY: " + this.startPosition.y / this.game.pd
      );
    }
    if (
      detectHomeCollision(this, this.startPositionPellet) &&
      this.ghostmode === GHOSTMODE.EATEN
    ) {
      console.log("Going to Dormant");
      console.log("X: " + this.position.x / 61 + " Y: " + this.position.y / 61);
      detectHomeCollision2(this, this.startPositionPellet);
      this.ghostmode = GHOSTMODE.DORMANT;
      this.position.x = this.startPosition.x;
      this.position.y = this.startPosition.y;
      this.firstScatter = true;
      this.timeout = 0;
      if (this.game.currentLevel < 3) {
        this.timeout = 8000;
      } else if (this.game.currentLevel < 5) {
        this.timeout = 6000;
      } else if (this.game.currentLevel < 10) {
        this.timeout = 4000;
      } else if (this.game.currentLevel < 15) {
        this.timeout = 3000;
      } else {
        this.timeout =
          (23 - this.game.currentLevel) * 1000 > 0 ? (25 - 20) * 1000 : 0;
      }
      this.dormantTimeout = new Timer(
        this.game,
        this.timeout,
        "Dormant Timeout Clyde"
      );
      this.dormantTimeout.addTimer();
    }

    if (
      this.dormantTimeout.milliseconds < 1000 &&
      this.ghostmode === GHOSTMODE.DORMANT
    ) {
      this.ghostmode = GHOSTMODE.SCATTER;
    }

    if (
      detectHomeCollision(this, this.scatterpellet) &&
      this.ghostmode === GHOSTMODE.SCATTER
    ) {
      this.firstScatter = false;
      this.ghostmode = GHOSTMODE.CHASE;
    }

    switch (this.direction) {
      case 0:
        if (this.position.x < this.pdtarget) {
          this.speed = { x: this.maxSpeed, y: 0 };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      case 1:
        if (this.position.x > this.pdtarget) {
          this.speed = { x: -this.maxSpeed, y: 0 };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      case 2:
        if (this.position.y > this.pdtarget) {
          this.speed = { x: 0, y: -this.maxSpeed };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      case 3:
        if (this.position.y < this.pdtarget) {
          this.speed = { x: 0, y: this.maxSpeed };
        } else {
          this.speed = { x: 0, y: 0 };
          this.moving = false;
        }
        break;
      default:
        break;
    }
    if (this.position.x < 0) {
      this.position.x = 0;
      this.moveRight();
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
      this.moveLeft();
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.speed.y = -this.speed.y;
      this.moveDown();
    }
    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight - this.height;
      this.moveUp();
    }
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    this.counter++;
    if (this.counter > 20) {
      this.counter = 0;
      this.updateTarget();
    }
    if (!this.moving) {
      this.moving = true;
      var way = this.pursueTarget(this.maintarget);
      switch (way) {
        case 0:
          this.moveRight();
          //console.log("Moved");
          break;
        case 1:
          this.moveLeft();
          //console.log("Moved");
          break;
        case 2:
          this.moveUp();
          //console.log("Moved");
          break;
        case 3:
          this.moveDown();
          //console.log("Moved");
          break;
        default:
          break;
      }
    }
    if (this.returnToStart) {
      this.position.x = this.startPosition.x;
      this.position.y = this.startPosition.y;
      this.returnToStart = false;
      this.firstScatter = true;
    }
  }

  updateTarget() {
    let distance;
    switch (this.ghostmode) {
      case GHOSTMODE.CHASE:
        //if distance is less than x, switch to scatter
        this.maintarget.x = this.game.pacman.position.x;
        this.maintarget.y = this.game.pacman.position.y;
        distance = Math.sqrt(
          Math.abs(this.position.x - this.game.pacman.position.x) ** 2 +
            Math.abs(this.position.y - this.game.pacman.position.y) ** 2
        );

        if (distance < this.game.pd * 5) {
          // switch to chase
          this.ghostmode = GHOSTMODE.SCATTER;
        }
        break;
      case GHOSTMODE.EATEN:
        this.maintarget.x = this.startPosition.x;
        this.maintarget.y = this.startPosition.y;
        break;
      case GHOSTMODE.SCARED:
        this.maintarget.x = this.game.pacman.position.x;
        this.maintarget.y = this.game.pacman.position.y;
        break;
      case GHOSTMODE.SCATTER:
        //if distance is greater than x, and ghost is out of box, switch to chase
        distance = Math.sqrt(
          Math.abs(this.position.x - this.game.pacman.position.x) ** 2 +
            Math.abs(this.position.y - this.game.pacman.position.y) ** 2
        );
        if (!this.firstScatter && distance >= this.game.pd * 5) {
          // switch to chase
          this.ghostmode = GHOSTMODE.CHASE;
        }
        this.maintarget.x = this.scattertarget.x;
        this.maintarget.y = this.scattertarget.y;
        break;
      default:
        break;
    }
  }
}

export class Inkie extends Ghost {
  constructor(game, startPosition, scattertarget, blinkie, speed = 1) {
    super(game, startPosition, scattertarget, speed);
    this.image = document.getElementById("inkie");
    this.defaultimage = document.getElementById("inkie");
    this.eatenimage = document.getElementById("inkieEaten");
    this.ghostName = "inkie1";
    console.log("Inkie!!");
    this.blinkie = blinkie;
  }

  updateTarget() {
    switch (this.ghostmode) {
      case GHOSTMODE.CHASE:
        // find distance and direction of pacman and blinkie
        // { x distance, y distance}
        // pacman - ghost

        var increase = { x: 0, y: 0 };
        if (this.game.pacman.direction === 0) {
          increase.x += this.game.pd;
        } else if (this.game.pacman.direction === 1) {
          increase.x -= this.game.pd;
        } else if (this.game.pacman.direction === 2) {
          increase.y -= this.game.pd;
        } else if (this.game.pacman.direction === 3) {
          increase.y += this.game.pd;
        }

        let distance = {
          x: this.game.pacman.position.x + increase.x - this.blinkie.position.x,
          y: this.game.pacman.position.y + increase.y - this.blinkie.position.y
        };

        // double the distance
        distance.x *= 2;
        distance.y *= 2;

        // set that as the target
        this.maintarget.x = this.blinkie.position.x + distance.x;
        this.maintarget.y = this.blinkie.position.y + distance.y;

        break;
      case GHOSTMODE.EATEN:
        this.maintarget.x = this.startPosition.x;
        this.maintarget.y = this.startPosition.y;
        break;
      case GHOSTMODE.SCARED:
        this.maintarget.x = this.game.pacman.position.x;
        this.maintarget.y = this.game.pacman.position.y;
        break;
      case GHOSTMODE.SCATTER:
        this.maintarget = { x: this.scattertarget.x, y: this.scattertarget.y };
        break;

      default:
        break;
    }
  }
  draw(ctx) {
    switch (this.ghostmode) {
      case GHOSTMODE.CHASE:
      case GHOSTMODE.SCATTER:
      case GHOSTMODE.DORMANT:
      case GHOSTMODE.PRESCATTER:
        this.maxSpeed = 2.05;
        this.image = this.defaultimage;
        break;
      case GHOSTMODE.EATEN:
        this.maxSpeed = 10.25;
        this.image = this.eatenimage;
        break;
      case GHOSTMODE.SCARED:
        this.maxSpeed = 2.05;
        this.image = this.scaredimage;
        break;
      default:
        break;
    }

    ctx.drawImage(
      this.image,
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.height,
      this.width
    );
    /*
    INKIE TARGET DRAWING
    INKIE TARGET DRAWING
    INKIE TARGET DRAWING
    INKIE TARGET DRAWING
    INKIE TARGET DRAWING
    INKIE TARGET DRAWING
    
    ctx.strokeStyle = "lightblue";
    ctx.beginPath();
    ctx.arc(this.maintarget.x, this.maintarget.y, 30, 0, 2 * Math.PI);
    ctx.stroke();
    */
  }
}

export class Timer {
  constructor(game, milliseconds, id) {
    this.game = game;
    this.milliseconds = milliseconds;
    this.id = id;
  }
  addTimer() {
    this.game.timers.runningTimers.push(this);
  }
  removeTimer() {
    var index = this.game.timers.runningTimers.indexOf(this);
    if (index > -1) {
      this.game.timers.runningTimers.splice(index, 1);
    }
  }
}
