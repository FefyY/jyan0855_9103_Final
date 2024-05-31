class Grass {

  // position,number of grass 
  constructor(x, y,x1,y1) {
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
  }

  display() {
    push();

    strokeWeight(12);
    stroke(color(0, 75, 65));
    line(this.x, this.y, this.x1, this.y1);
    pop();
  


}
//control the growth of graas
  update() {
    this.x1 += random(-0.6,0.6)
    this.y1 += random(-0.6,0.6)





}
}