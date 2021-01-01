var hr= hour()
var min= minnute()
var sec= second()
var push

function setup() {
  createCanvas(720, 400);
  createSprite(400, 200, 50, 50);
}
  let c = map(mouseX, 0, width, 0, 175);
 
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
 
    let h = hour();
      text('Current hour:\n' + h, 5, 50);let h = hour();

      let m = minute();
      text('Current minute: \n' + m, 5, 50);

      let s = second();
      text('Current second: \n' + s, 5, 50); 
  
  
  
  push()
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

  

function draw() {
  background(0);  
  pop.display()
  push.display()

      


  drawSprites();
}