class Flower {

  // position,leavenumber, Shape selection
  constructor(x, y, leaveNumber, shape) {
    this.x = x;
    this.y = y;
    this.leaveNumber = leaveNumber;
    this.shape = shape;
    this.colours = [];  // Array to hold colors for each leaf
    this.offset = random(1000); // Unique offset for each flower for variation
    this.scale = 1;

    // Initialize colors for each leaf
    for (let i = 0; i < this.leaveNumber; i++) {

      let colourNum = Math.floor(random(0, 2));  // Randomize color choice
      switch (colourNum) {
        case 0:
          this.colours.push(color(341, 60, 79));
          break;
        case 1:
          this.colours.push(color(338, 48, 9));
          break;
      }
    }
  }

  display() {
    for (let e = 1; e < this.leaveNumber; e++) {
      push();
      scale(this.scale)
      this.moveX = noise(this.offset+e*0.2)*100;
      this.moveY = noise(this.offset+e*0.1)*10;
      strokeWeight(12);
      stroke(this.colours[e]);  // Use stored color for each leaf
      noFill();
      switch (this.shape) {
        //The big flower with node
        case 0:

           curve(this.x-900+100*e+this.moveX, this.y-700-this.moveY,
                this.x, this.y, 
                this.x+400-e*25+this.moveX, this.y-300-this.moveY, 
                this.x-400+e*40+this.moveX, this.y-300-this.moveY)
          
           curve(
                    this.x - 10 * e,
                    this.y + 50 * e,
                    this.x - 20,
                    this.y + 40,
                    this.x + 2 * e,
                    this.y + 2 * e,
                    this.x * 0.5,
                    this.y * 0.5
                    );
            curve(
                      this.x - 10 * e,
                      2 * this.y - (this.y + 50 * e),
                      this.x - 20,
                      2 * this.y - (this.y + 40),
                      this.x + 2 * e,
                      2 * this.y - (this.y + 2 * e),
                      this.x * 0.5,
                      2 * this.y - (this.y * 0.5)
                      );
          
          break;

          //The Bug like flower
        case 1:
          curve(this.x-50*e+this.moveX, this.y+200-this.moveY,
            this.x, this.y, 
            this.x-60-5*e+this.moveX, this.y-100+30*e-this.moveY, 
            this.x-600+100*e, this.y+200-this.moveY)

           curve(this.x+this.moveX, this.y+200+20*e-this.moveY,
                this.x, this.y, 
                this.x+150-20*e+this.moveX, this.y-200+50*e-this.moveY, 
                 this.x+300-100*e+this.moveX, this.y+250-this.moveY)
           curve(
                  this.x - 10 * e+this.moveX,
                  this.y + 50 * e,
                  this.x - 20,
                  this.y + 40,
                  this.x + 2 * e+this.moveX,
                  this.y + 2 * e-this.moveY,
                  this.x * 0.5+this.moveX,
                  this.y * 0.5-this.moveY
                  );
            curve(
                    this.x - 10 * e+this.moveX,
                    2 * this.y - (this.y + 50 * e)-this.moveY,
                    this.x - 20,
                    2 * this.y - (this.y + 40),
                    this.x + 2 * e+this.moveX,
                    2 * this.y - (this.y + 2 * e)-this.moveY,
                    this.x * 0.5+this.moveX,
                    2 * this.y - (this.y * 0.5)-this.moveY
                    );
          break;
          //The wave like flower on right

        case 2:
          curve(
            this.x + 60 * e+this.moveX, 
            this.y - 300 * e-this.moveY, 
            this.x,
            this.y,
            this.x - 190 - 12 * e+this.moveX, 
            this.y - 380 + 40 * e-this.moveY,
            this.x * 0.3 + 450+this.moveX,
            this.y *0.8 + 100-this.moveY);
            break;
          //The perfect flower in the centre

        case 3:
          curve(this.x+200+this.moveX, this.y+200-this.moveY,
                this.x, this.y,
                this.x+cos(e*55)*100+this.moveX, this.y+sin(e*55)*100-this.moveY, 
                this.x+200, this.y+100-this.moveY)
                
                break;
        //The thin flower pointing to the left corner

        case 4:
          curve(
            this.x-200+this.moveX, this.y-200-this.moveY,
            this.x, this.y,
            this.x-sin(e*25)*100+this.moveX, this.y-100*sin(e*28)-this.moveY,
            this.x-200+this.moveX, this.y-100-this.moveY);
            break;
        //The rib like flower, LN cant go up to 7 or higher

        case 5:
          line(this.x, this.y,
            this.x+200, this.y-200
         );
         curve(this.x+200+this.moveX, this.y-200-this.moveY,
          this.x+40*e, this.y-40*e,
          this.x+80+20*e+this.moveX, this.y-200-5*e-this.moveY,
          this.x+300+30*e+this.moveX, this.y-500-this.moveY)
          curve(this.x+200+this.moveX, this.y-this.moveY,
            this.x+40*e, this.y-40*e,
            this.x+100+30*e+this.moveX, this.y-50-25*e-this.moveY,
            this.x+500+this.moveX, this.y-500-this.moveY)
  
          break;
        //The wave like flower number 2 on left

          case 6:
            curve(
              2 * this.x - (this.x + 60 * e)+this.moveX, 
              2 * this.y - (this.y - 300 * e)-this.moveY,
              2 * this.x - this.x,
              2 * this.y - this.y,
              2 * this.x - (this.x - 190 - 12 * e)+this.moveX,
              2 * this.y - (this.y - 380 + 40 * e)-this.moveY,
              2 * this.x - (this.x * 0.3 + 450)+this.moveX,
              2 * this.y - (this.y * 0.8 + 100)-this.moveY
            );
            break;
            
          }
          pop();
          this.offset += 0.0005
  }
}
    update(){
      this.scale += 0.000001
      this.x += 0.3; // Horizontal drift
      if (this.x - 130 > width) {
        this.x = -130;
    }
}    
}