drawSunset();
function drawSunset() {
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
  dot(120);
  penUp();
  moveTo(160, 260);
  penDown();
  //removeothersideofthecircle
  moveBackward(5);
  turnRight(90);
  penRGB(253, 184, 53, 1);
  penWidth(10);
  moveForward(5);
  moveBackward(5);
  turnRight(90);
  penWidth(10);
  moveForward(37);
  turnLeft(90);
  penWidth(78);
  moveForward(150);
  // askonhowtoreducesteps
}
function drawCloud1(xAxis, yAxis) {
  //draw the small left cloud
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
drawGrass();
fillInGrass();
drawAllButterflies();
//draw grass
function drawGrass() {
  penUp();
  moveTo(300, 260);
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
  moveTo(0, 400) ;
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
function drawRightWing() {
  penDown();
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
  for (var i = 0; i < 3; i++) {
    drawButterfly();
  }
}
hide();
penUp();
drawAllTrees();
penUp();
drawAllBirds();
//draws numerous birds based on the number inserted in the loop
function drawAllBirds() {
  for (var i = 0; i < 2; i++) {
    moveTo(randomNumber(20, 285), randomNumber(10, 120));
    penWidth(5);
    penColor("black");
    drawBird(randomNumber(30, 60));
  }
}
//draws numerous trees based on the number inserted in the loop
function drawAllTrees() {
  for (var i = 0; i < 3; i++) {
    penUp();
    turnTo(0);
    moveTo(randomNumber(0, 320), randomNumber(
    325, 450));
    drawTree();
  }
}
//draws a tree
function drawTree() {
  penDown();
  penWidth(15);
  penColor(rgb(165, 42, 42));
  moveForward(50);
  turnRight(90);
  penColor("green");
  penWidth(26);
  drawBigTriangle();
  penUp();
  move(-5, -45);
  penDown();
  drawLittleTriangle();
}
//draws a big triangle, "base of the tree"
function drawBigTriangle() {
  moveForward(50);
  turnLeft(135);
  moveForward(75);
  turnLeft(90);
  moveForward(75);
  turnLeft(135);
  moveForward(55);
  penUp();
  move(0, -20);
  penColor("green");
  penDown();
  dot(23);
}
//draws a little triangle, the "top of the tree"
function drawLittleTriangle() {
  moveForward(35);
  turnLeft(135);
  moveForward(45);
  turnLeft(90);
  moveForward(45);
  turnLeft(135);
  moveForward(35);
}
function drawBird(size) {
  penDown();
  turnTo(0);
  turnRight(90);
  arcRight(45, size);
  turnLeft(90);
  arcRight(45, size);
  penUp();
}
