# P5.js
- `rect( _ , _ , _ , _ )`
- x, y, width, height
---
- set color stroke/ fill
- `// call the color before the shape, they will not change expcet we change them`
- `stroke()`
- `fill()`
- `rect()`
- `eclipse()`
- `line()`
- `background()`
---
- ####Map
  - `map( _ , _ , _ , _ , _ )`
  - value, min, max, toMin, toMax
---
- `random( _ , _ )`
- min, max
---
- `text( _ , _ , _ )`
- text, x coordinate, y coordinate
---

- p5js library
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.dom.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.sound.min.js"></script>
  ```


- collision
```javascript
this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true
    }
    return false
  }
```
