var button;
var slider;
var input;
var bgColor;

function setup() {
  createCanvas(400,400)
  rectMode(CENTER)
  button = createElement('button',"go go go")
  slider = createSlider(10,400,47)
  input = createInput('type your name')
  button.mousePressed(changeColor)
  bgColor = color(255)
}


function changeColor(){
  bgColor = color(random(255), random(255), random(255))
}

function draw() {
  background(bgColor)
  rect(200,200,slider.value(), slider.value())
  text(input.value(), 10, 20)
}
