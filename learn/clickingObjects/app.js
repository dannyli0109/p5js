var bubbles = [];
var img

function preload() {
  img = loadImage("http://pngimg.com/uploads/camomile/camomile_PNG666.png?i=1")
}
function setup() {
  createCanvas(600,400)
  // for (var i = 0; i < 10; i++) {
  //   bubbles.push(new Bubble(random(0, width), random(0, height)))
  // }
  rectMode(CENTER)
}


function draw() {
  background(0)
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].changeColor()
    bubbles[i].move()
    bubbles[i].display()
    if (bubbles[i].isFinished()) {
      bubbles.splice(i,1)
      i--
    }

  }
}

function mousePressed() {
  // for (var i = 0; i < bubbles.length; i++) {
  //     bubbles[i].clicked()
  // }
  bubbles.push(new Bubble(mouseX, mouseY))
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY))

}
