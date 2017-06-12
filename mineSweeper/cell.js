
function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.bgColor = color(255)
  this.bee = false;

  this.revealed = false;
  this.neighbour = 0;
}

Cell.prototype.show = function() {
  stroke(0)
  strokeWeight(1)
  fill(this.bgColor)
  rect(this.x, this.y, this.w, this.w)


  if (this.revealed) {
    if (this.bee) {
      stroke(0)
      fill(127)
      ellipse(this.x + this.w /2, this.y + this.w / 2, this.w / 2)
    } else {
      fill(200)
      rect(this.x, this.y, this.w, this.w)
      if (this.neighbour > 0){
        fill(0)
        text(this.neighbour,this.x + this.w /2 - 3, this.y + this.w / 2 + 4)
      }

    }
  }
}


Cell.prototype.countNeighbours = function() {
  if (this.bee) {
    this.neighbour = -1
    return
  }
  var count = 0
  for (iOff = -1; iOff <= 1; iOff++) {
    for (jOff = -1; jOff <= 1; jOff++) {
      var i = this.i + iOff
      var j = this.j + jOff

      if (i > -1 && i < cols && j > -1 && j < rows) {
        if (grid[i][j].bee) {
          count ++;
        }
      }

    }
  }
  this.neighbour = count;
}

Cell.prototype.reveal = function() {
  this.revealed = true;
  if (this.neighbour === 0 ){
    this.floodFill()
  }
}

Cell.prototype.floodFill = function() {
  for (var xOff = -1; xOff <= 1; xOff++) {
    var i = this.i + xOff;
    if (i < 0|| i >= cols) continue;

    for (var yOff = -1; yOff <= 1; yOff++) {
      var j = this.j + yOff;
      if (j < 0 || j >= rows) continue;

      var neib = grid[i][j];
      if (!neib.bee && !neib.revealed) {
        neib.reveal();
      }
    }
  }
}

Cell.prototype.contains = function(x, y) {
  return (
    x > this.x &&
    x < (this.x + this.w) &&
    y > this.y &&
    y < (this.y + this.w)
  )
}
