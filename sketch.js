let inc = 0.01;
let start = 0;

function setup() {
  createCanvas( screen.width/2, screen.height/2);
}

function draw() {
  background(255, 110, 150);
  
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    //let y = random(height);
    let y = map(noise(xoff), 0, 1, 0,height);
    vertex(x, y);    
    xoff += inc;
  }
  endShape();
  
  start += inc;
  
  //noLoop();
}
