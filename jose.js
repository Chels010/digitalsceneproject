drawSky();
function drawSky() {
  drawBackground();
  drawSun();
  drawCloud1(randomNumber(20, 280), randomNumber(20, 150));
  drawCloud2(randomNumber(20, 280), randomNumber(20, 150));
}
function drawBackground() {
  //draws the background
  moveTo(315, 240);
  penRGB(254, 91, 53, 1);
  penWidth(100);
  turnLeft(90);
  penDown();
  for (var i = 0; i < 4; i++) {
    moveForward(320);
    turnRight(90);
  }
  moveTo(160, 240);
  turnRight(90);
  moveForward(150);
  dot(152);
  penUp();
  moveTo(160, 290);
}
function drawSun() {
  //draws the full sun
  penRGB(253, 184, 53, 1);
  moveForward(60);
  dot(120);
  penUp();
  moveTo(160, 240);
  penDown();
  //removeothersideofthecircle
}
function drawCloud1(xAxis, yAxis) {
  //draw the small left cloud
  turnRight(90);
  penColor("white");
  penUp();
  penWidth(5);
  moveTo(xAxis, yAxis);
  penDown();
  moveForward(70);
  turnLeft(90);
  arcLeft(90, 25);
  turnRight(90);
  arcLeft(90, 25);
  arcLeft(90, 25);
  turnRight(90);
  arcLeft(90, 25);
  turnLeft(90);
  moveForward(30);
}
function drawCloud2(xAxis, yAxis) {
  //draw the top right cloud
  penUp();
  moveTo(xAxis, yAxis);
  penDown();
  moveForward(100);
  arcLeft(120, 17);
  turnLeft(90);
  turnRight(90);
  arcLeft(90, 25);
  turnRight(90);
  arcLeft(110, 30);
  turnRight(90);
  arcLeft(90, 25);
  arcLeft(90, 25);
}
