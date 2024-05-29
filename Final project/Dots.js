class Dot {

  // position,number of Dots 
  constructor(x, y, colourNum) {
    this.x = x;
    this.y = y;
    this.colourNum = colourNum
    //Three different colours
    switch (this.colourNum) {
      case 0:
        this.colour = color(350, 25, 100);
        break;
      case 1:
        this.colour = color(0,0,0);
        break;
      case 2:
        this.colour = color(0, 100, 55);
        break;
    }
  }

  display() {
    push();

    strokeWeight(8);
    stroke(this.colour)
    fill(this.colour);
    circle(this.x,this.y,10)
    pop();
  


}
update(){
  this.x += 1
  if(this.x>width){
    this.x = 0
  }
}
}