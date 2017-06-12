function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.color = color(255, 100)
  this.diameter = 48
  this.click = false
  this.lifeSpan = 255

  this.display = function() {
    // stroke(255);
    noStroke()
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }

  this.move = function() {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1)
    this.lifeSpan --

  }

  this.changeColor = function() {
    this.color = color(random(255),random(255),random(255))
  }

  this.isFinished = function() {
    if (this.lifeSpan <= 0) {
      return true
    }
    return false
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true
    }
    return false
  }

  // this.clicked = function() {
  //   if (dist(mouseX, mouseY, this.x,this.y) <= this.diameter / 2) {
  //     this.click = !this.click
  //     this.color = this.click ? color(255, 0, 200) : color(255, 100);
  //   }
  // }
}
