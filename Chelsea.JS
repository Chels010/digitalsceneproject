hide();
penUp();
moveTo(randomNumber(35, 285), 450);
drawAllTrees();
function drawAllTrees() {
  drawTree();
}
//draws a tree
function drawTree() {
  penDown();
  moveForward(25);
  turnRight(90);
  drawBigTriangle();
  penUp();
  moveTo(156, 165);
  penDown();
  drawLittleTriangle();
}
//makes a big triangle, "base of the tree"
function drawBigTriangle() {
  moveForward(50);
  turnLeft(135);
  moveForward(75);
  turnLeft(90);
  moveForward(75);
  turnLeft(135);
  moveForward(55);
}
//makes a little triangle, "top of the tree"
function drawLittleTriangle() {
  moveForward(40);
  turnLeft(135);
  moveForward(60);
  turnLeft(95);
  moveForward(55);
  turnLeft(130);
  moveForward(45);
}
