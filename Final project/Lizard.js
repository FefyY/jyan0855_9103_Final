class Lizard {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale; // Scale factor to adjust the size of the lizard
    this.angle = 0
    this.offset = random(1000);
  }

  display() {

    stroke(50, 80, 50);
    fill(82, 56, 42); 
    strokeWeight(2);
    
    push();

    translate(this.x, this.y); // Translates to the lizard's position
    rotate(this.angle)
    scale(this.scale); // Scales the lizard based on the scale factor

    // body
    ellipse(0, 0, 40, 15);

    //head
    ellipse(25, -5, 10, 10);

    //legs
    line(10, 7, 15, 20); // Front leg
    line(10, -7, 15, -20); // Front leg raised
    line(-10, 7, -15, 20); // Back leg
    line(-10, -7, -15, -20); // Back leg raised

    // Draw the tail
    noFill();
    stroke(82, 56, 42);
    bezier(-20, 0, -40, 10, -50, -10, -60, 5);

    pop(); // Restore original state
  }

  //update method to move the lizard
  update() {
    if (frameCount%120 == 0){
      this.angle +=random(-30,30)
    }
    if(colorB>20){
      this.x += noise(this.offset)*5; 
      this.y += noise(this.offset)*5*random(-1,1); 
    if (this.x - 30 > width) {
      this.x = -30;}
    if (this.y - 30 > height) {
      this.y = -30;}
  }
}
}