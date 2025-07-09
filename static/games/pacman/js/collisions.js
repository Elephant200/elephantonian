export function detectPacmanPelletCollision(pacman, pellet) {
  let centerOfCircle1 = {
    x: pacman.position.x,
    y: pacman.position.y
  };
  let centerOfCircle2 = {
    x: pellet.position.x,
    y: pellet.position.y
  };
  let circle1Radius = pacman.size;
  let circle2Radius = pellet.size;
  let distance = Math.sqrt(
    (centerOfCircle1.x - centerOfCircle2.x) ** 2 +
      (centerOfCircle1.y - centerOfCircle2.y) ** 2
  );

  let combinedRadii = circle1Radius + circle2Radius;
  if (combinedRadii >= distance) {
    return true;
  } else {
    return false;
  }
}

export function detectPacmanGhostCollision(pacman, ghost) {
  let centerOfCircle1 = {
    x: pacman.position.x,
    y: pacman.position.y
  };
  let centerOfCircle2 = {
    x: ghost.position.x,
    y: ghost.position.y
  };
  let circle1Radius = pacman.size;
  let circle2Radius = ghost.width / 2 - 5;
  let distance = Math.sqrt(
    (centerOfCircle1.x - centerOfCircle2.x) ** 2 +
      (centerOfCircle1.y - centerOfCircle2.y) ** 2
  );

  let combinedRadii = circle1Radius + circle2Radius;
  if (combinedRadii >= distance) {
    return true;
  } else {
    return false;
  }
}

export function detectHomeCollision(ghost, pellet) {
  let pelletCenter = {
    x: pellet.position.x,
    y: pellet.position.y
  };

  let ghostCenter = {
    x: ghost.position.x + ghost.width / 2,
    y: ghost.position.y + ghost.height / 2
  };

  let circle1Radius = pellet.size;
  let circle2Radius = ghost.width / 2;
  let distance = Math.sqrt(
    (pelletCenter.x - ghostCenter.x) ** 2 +
      (pelletCenter.y - ghostCenter.y) ** 2
  );

  let combinedRadii = circle1Radius + circle2Radius;
  if (combinedRadii >= distance - 10) {
    return true;
  } else if (combinedRadii >= distance - 20) {
    //console.log((distance - combinedRadii) / ghost.game.pd + "pds away");
    return false;
  } else {
    return false;
  }
}

export function detectHomeCollision2(ghost, pellet) {
  let pelletCenter = {
    x: pellet.position.x,
    y: pellet.position.y
  };

  let ghostCenter = {
    x: ghost.position.x + ghost.width / 2,
    y: ghost.position.y + ghost.height / 2
  };

  let circle1Radius = pellet.size;
  let circle2Radius = ghost.width / 2;
  let distance = Math.sqrt(
    (pelletCenter.x - ghostCenter.x) ** 2 +
      (pelletCenter.y - ghostCenter.y) ** 2
  );

  let combinedRadii = circle1Radius + circle2Radius;
  if (combinedRadii >= distance - 10) {
    console.log("Home collision");
    console.log("Distance: " + distance + "\nConbined Radii: " + combinedRadii);
    console.log(
      "X:" + pellet.position.x / 61 + " Y: " + pellet.position.y / 61
    );
    console.log(
      "Pellet Center: (" + pelletCenter.x / 61 + "," + pelletCenter.y / 61 + ")"
    );
    console.log(
      "Ghost Center: (" + ghostCenter.x / 61 + "," + ghostCenter.y / 61 + ")"
    );

    return true;
  } else if (combinedRadii >= distance - 20) {
    //console.log((distance - combinedRadii) / ghost.game.pd + "pds away");
    return false;
  } else {
    return false;
  }
}
