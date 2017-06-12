

var grid = [];
var cols = 15;
var rows = 15;
var w = 20;
var totalBees = 20;
var gameOvered = 0;

document.oncontextmenu = function() {
    return false;
}


function make2DArray(cols, rows) {
  var arr = new Array(cols)
  for(var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
  return arr;
}


function setup(){
  createCanvas(401,401)

  // cols = floor(width / w);
  // rows = floor(height / w);
  grid = make2DArray(cols, rows)
  for (var i = 0; i < cols; i++) {
    var column = []
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w)
    }
  }

  var options = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      options.push([i,j])
    }
  }

  for (var n = 0; n < totalBees; n++) {
    var index = floor(random(options.length))
    var choice = options.splice(index,1)[0]
    var i = choice[0]
    var j = choice[1]
    grid[i][j].bee = true
  }


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].countNeighbours();

    }
  }
}


function draw() {
  background(255)
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show()
    }
  }
  if (gameOvered > 0) {
    stroke(255,0,0)
    fill(255,0,0)
    text(gameOvered == 1? "You Won" : "You Lose" ,mouseX,mouseY)
  }

}


function mousePressed() {
  if (gameOvered > 0) {
    return
  }
  if (mouseButton == LEFT) {
    leftClick()
  }

  if (mouseButton == RIGHT) {
    rightClick()
  }




}

function leftClick() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {

      if (grid[i][j].contains(mouseX, mouseY)) {
        if (!grid[i][j].revealed) {
          grid[i][j].reveal()
        }
        if (grid[i][j].bee) {
          gameOver()
        } else {
          var count = 0
          for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
              if (grid[i][j].revealed) count ++;
            }
          }
          if (count >= cols * rows - totalBees){
            gameOvered = 1
          }
        }
      }
    }
  }


}


function rightClick() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].flag()
      }
    }
  }
}


function gameOver() {
  gameOvered = 2;
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].revealed = true;
    }
  }

}
