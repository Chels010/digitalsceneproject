hide();
penUp();
drawAllTrees();
function drawAllTrees() {
  for (var i = 0; i < 3; i++) {
    penUp();
    turnTo(0);
    moveTo(randomNumber(35, 285), randomNumber(
    350, 450));
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
