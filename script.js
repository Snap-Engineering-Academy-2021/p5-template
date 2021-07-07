let colorlist = ['green', 'pink', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
  // line(20, 10, mouseX, mouseY);
  // stroke(random(colorlist));
  // strokeWieght(1);
  strokeWeight(1);
  stroke(random(255), random(200), random(200), 120);
  line(mouseX, mouseY, random(width), random(height));
  line(mouseX, mouseY, random(width), random(height));
  line(mouseX, mouseY, random(width), random(height));

  // gill lines stationary
  // stroke(0, 0, 0, 10)
  // line(width / 2, height / 2, random(width), random(height));
  // strokeWeight(3)
  // stroke(51, 51, 0, 10)
  // line(width / 2, height / 2, random(width), random(height));
 
    if (mouseIsPressed)
    {
      background(0);
      
    }
}
