var img;
var bubbles = []
var button;
function preload() {
  // img = loadImage("flower1.png")
}

function setup() {
  createCanvas(600, 400)
  button = createElement("button", "go go go")
}


function draw() {
  background(0);
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update()
    bubbles[i].display()
  }
}

function mousePressed() {
  var b = new Bubble(mouseX, mouseY)
  bubbles.push(b);
}
