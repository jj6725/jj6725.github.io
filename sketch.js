function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
  const textX = windowWidth / 2 - 200;
  const textY = windowHeight / 2;
  background(255);
  textSize(100);
  fill(0, 102, 153, 51);
  text("pipr.dev", textX, textY + 50);
  fill(0, 102, 153);
  text("pipr.dev", textX, textY);
  fill(0);
  text("pipr.dev", textX, textY - 50);
}

function paintStroke(strokeLength, strokeColor, strokeThickness) {
  let stepLength = strokeLength / 4.0;

  // Determines if the stroke is curved. A straight line is 0.
  let tangent1 = 0;
  let tangent2 = 0;

  let odds = random(1.0);

  if (odds < 0.7) {
    tangent1 = random(-strokeLength, strokeLength);
    tangent2 = random(-strokeLength, strokeLength);
  }

  // Draw a big stroke
  noFill();
  stroke(strokeColor);
  strokeWeight(strokeThickness);
  curve(
    tangent1,
    -stepLength * 2,
    0,
    -stepLength,
    0,
    stepLength,
    tangent2,
    stepLength * 2
  );

  let z = 1;

  // Draw stroke's details
  for (let num = strokeThickness; num > 0; num--) {
    let offset = random(-50, 25);
    let newColor = color(
      red(strokeColor) + offset,
      green(strokeColor) + offset,
      blue(strokeColor) + offset,
      random(100, 255)
    );

    stroke(newColor);
    strokeWeight(random(0, 3));
    curve(
      tangent1,
      -stepLength * 2,
      z - strokeThickness / 2,
      -stepLength * random(0.9, 1.1),
      z - strokeThickness / 2,
      stepLength * random(0.9, 1.1),
      tangent2,
      stepLength * 2
    );

    z += 1;
  }
}
