function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220, 0, 0);
    noStroke();
    fill(0, 0, 255, 128)
    rect(0,0, 300,300);
    
    fill(255, 90, 0, 127)
    circle(width/2, height/2, 200)
    
    fill(0, 255, 255, 127)
    triangle(0, 0, 300, 200, 100, 100)
  }