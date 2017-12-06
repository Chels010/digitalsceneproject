//draw grass
function drawGrass() {
  penUp();
  moveTo(0, 260);
  arcRight(45, 10);
  penDown();
  for (var i = 0; i < 4; i++) {
    penRGB(13, 229, 100, 1);
    penWidth(5);
    moveForward(25);
    turnTo(180);
    arcRight(45, 25);
    turnLeft(180);
  }
}
//draw grass backwards
function drawGrassBackwards() {
  penUp();
  moveTo(316, 260);
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
//fill in grass
function fillInGrass() {
  penUp();
  moveTo(0, 347);
  penDown();
  turnTo(90);
  penWidth(250);
  moveForward(310);
  penDown();
}
drawGrass();
drawGrassBackwards();
fillInGrass();
//positionButterfly
function positionButterfly(positionx, positiony) {
  penUp();
  moveTo(positionx, positiony);
  penDown();
}
positionButterfly(randomNumber(20, 285), randomNumber(195, 35));
//Butterfly Abdomen
drawAbdomen();
function drawAbdomen() {
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
}
function leftWing() {
  penWidth(5);
  turnLeft(90);
  for (var i = 0; i < 3; i++) {
    arcRight(45, 10);
  }
  turnLeft(180);
  for (var i = 0; i < 6; i++) {
    arcRight(45, 5);
  }
  turnLeft(40);
  moveForward(5);
}
leftWing();
//transition to left antenna
function drawLeftAntenna() {
  turnLeft(90);
  arcRight(45, 3);
  turnLeft(90);
  penWidth(1);
  moveForward(13);
  turnRight(180);
  moveForward(13);
}
drawLeftAntenna();
//transition to right antenna
function drawRightAntenna() {
  turnLeft(90);
  for (var i = 0; i < 2; i++) {
    arcRight(45, 3);
  }
  turnRight(242);
  moveForward(13);
  turnRight(180);
  moveForward(13);
}
drawRightAntenna();
function drawRightWing() {
  //transition to right wing 
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
  for (var i = 0; i < 6; i++) {
    arcLeft(45, 5);
  }
  turnRight(40);
  moveForward(5);
}
drawRightWing();
//seeing
penUp();
moveTo(262, 162);
