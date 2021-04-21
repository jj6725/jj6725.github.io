function setup() {
  createCanvas(windowWidth*0.8, windowHeight*0.8);
}

function draw() {
  const textX = windowWidth/2 -200
  const textY = windowHeight/2
  background(255);
  textSize(100);
  fill(0, 102, 153, 51);
  text("pipr.dev", textX, textY + 50)
  fill(0, 102, 153);
  text("pipr.dev", textX, textY)
  fill(0)
  text("pipr.dev", textX, textY - 50)
}
