drawGrass();
fillInGrass();
drawAllButterflies();
function drawGrass() {
  penUp();
  moveTo(345, 260);
  arcLeft(45, 25);
  penDown();
  for (var i = 0; i < 35; i++) {
    penRGB(13, 229, 100, 1);
    penWidth(5);
    moveForward(25);
    turnTo(180);
    arcLeft(45, 25);
    turnRight(180);
  }
}
function fillInGrass() {
  penUp();
  moveTo(0, 360);
  penDown();
  turnTo(90);
  penWidth(250);
  moveForward(310);
  penUp();
}
//positionButterfly
function positionButterfly(positionx, positiony) {
  penUp();
  moveTo(positionx, positiony);
}
//Butterfly Abdomen
function drawAbdomen() {
  penDown();
  turnLeft(90);
  penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 1);
  penWidth(6);
  for (var i = 0; i < 2; i++) {
    moveForward(25);
    arcRight(45, 3);
    arcRight(45, 3);
    arcRight(45, 3);
    arcRight(45, 3);
  }
  penUp();
}
function drawLeftWing() {
  penDown();
  penWidth(5);
  turnLeft(90);
  for (var i = 0; i < 3; i++) {
    arcRight(45, 10);
  }
  turnLeft(180);
  for (var y = 0; y < 6; y++) {
    arcRight(45, 5);
  }
  turnLeft(40);
  moveForward(5);
  penUp();
}
//transition to left antenna
function drawLeftAntenna() {
  penDown();
  turnLeft(90);
  arcRight(45, 3);
  turnLeft(90);
  penWidth(1);
  moveForward(13);
  turnRight(180);
  moveForward(13);
  penUp();
}
//transition to right antenna
function drawRightAntenna() {
  penDown();
  turnLeft(90);
  for (var i = 0; i < 2; i++) {
    arcRight(45, 3);
  }
  turnRight(242);
  moveForward(13);
  turnRight(180);
  moveForward(13);
  penUp();
}
//transition to right wing 
function drawRightWing() {
  penDown();
  turnLeft(90);
  penWidth(5);
  arcRight(65, 3);
  moveForward(25);
  //right wing
  turnLeft(90);
  for (var i = 0; i < 3; i++) {
    arcLeft(45, 10);
  }
  turnRight(180);
  for (var x = 0; x < 6; x++) {
    arcLeft(45, 5);
  }
  turnRight(40);
  moveForward(5);
  penUp();
}
function drawButterfly() {
  positionButterfly(randomNumber(20, 285), randomNumber(195, 35));
  drawAbdomen();
  drawLeftWing();
  drawLeftAntenna();
  drawRightAntenna();
  drawRightWing();
}
function drawAllButterflies() {
  for (var i = 0; i < 4; i++) {
    drawButterfly();
  }
}
