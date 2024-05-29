let flowers =[];
let numFlowers =4;

let dots = [];
let numDots = 400

let colorB = 91;
let inc = -1;

let grasses = []
let grassNum = 60
//Initialise flower array
function initialiseFlowers() {
  // Clear the array
  flowers = []; 
  //To make the graphic form the imprssion of the orignial work
  flowers.push(new Flower(
        width/4, 
        height/3,
        22,
        0)); 
  flowers.push(new Flower(
      width/10*9, 
      height/10,
      8,
      1));
  // flowers.push(new Flower(
  //   width+75, 
  //   height/10*6,
  //   9,
  //   2));
  flowers.push(new Flower(
    width/2, 
    height/2,
    20,
    3));

  flowers.push(new Flower(
    (width/10)*7, 
    0,
    20,
    3));
  flowers.push(new Flower(
    0, 
    height,
    20,
    3));
  flowers.push(new Flower(
    width/10*7, 
    height/10*8.5,
      20,
      4));
  flowers.push(new Flower(
    width/5, 
    height/10*9,
    5,
    5));
  flowers.push(new Flower(
    -170, 
    height/2,
    8,
    6));
    if (width>1000 && height>1000){
    //if the canvsa too big, add more random flower
      for (let i = 0; i < numFlowers; i++) {
         let flower = new Flower(
          random(width), 
          random(height),
          floor(random(18,25)),
          floor(random(2,5)))
    flowers.push(flower); 
  }
    }
    

  // Instantiate all the flower objects with random values as outlined above
  // for (let i = 0; i < numFlowers; i++) {
  //   let flower = new Flower(
  //     random(width), 
  //     random(height),
  //     floor(random(1,20)),
  //     floor(random(7)))
  //   flowers.push(flower); 
  // }
}
// Instantiate all the dots objects
function initialiseDots() {
  dots = []; //if the canvsa too big, add more dots
  if (width>1000 && height>1000){

    numDots +=300
  }
  for (let i = 0; i < numDots; i++) {
    let dot = new Dot(
      random(width), 
      random(height),
      Math. floor(random(0,3)))
    dots.push(dot); 
    
  }
  
}
// Instantiate all the grass objects
function initialiseGrass() {
  //if the canvsa too big, add more grass
  if (width>1000 || height>1000){
    
     grassNum +=20
  }
  for (let i = 0; i < grassNum; i++) {
    let posy = random(height);
    let posx = random(width);
    let diffY = random(-5, 5);
    let diffX = random(-5, 5);

    if (i < grassNum / 4) {
      // Left side
      //grass.push({x1: 0, y1: posy, x2: 15, y2: posy + diffY});
      let grass = new Grass(
        0, 
        posy,
        15,
        posy + diffY)
      grasses.push(grass); 
    } else if (i >= grassNum / 4 && i < grassNum / 2) {
      // Right side
      //grass.push({x1: width, y1: posy, x2: width - 15, y2: posy + diffY});
      let grass = new Grass(
        width, 
        posy,
        width-15,
        posy + diffY)
      grasses.push(grass); 
    } else if (i >= grassNum / 2 && i < 3 * grassNum / 4) {
      // Top
      //grass.push({x1: posx, y1: 0, x2: posx + diffX, y2: 15});
      let grass = new Grass(
        posx, 
        0,
        posx+diffX,
        15)
      grasses.push(grass); 
    } else {
      // Bottom
      //grass.push({x1: posx, y1: height, x2: posx + diffX, y2: height - 15});
      let grass = new Grass(
        posx, 
        height,
        posx+diffX,
        height-15)
      grasses.push(grass); 
    }
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  initialiseFlowers();
  initialiseDots();
  initialiseGrass();
  lizard = new Lizard(200, 200, 1); 

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  colorB += inc
  if (colorB >= 150 || colorB <= -20) {
    inc = -inc; // Reverse the increment direction when limits are reached
    colorB = constrain(colorB, 0, 360); // Constrain the value to be within 0-360
  }

  angleMode(DEGREES)

  background(38, 97, colorB);
  //Draww all the objects
  for(const flower of flowers){
    flower.update()
    flower.display();
  }
  for(const dot of dots){
    dot.update()
    dot.display();
  }
  for(const grass of grasses){
    grass.update()
    grass.display();

  }
  lizard.update(); 
  lizard.display(); 
  //drawGrass();
}
// draw grass function
// function drawGrass() {
//   for (let i = 0; i < grassNum; i++) {
//     let blade = grass[i];
//     strokeWeight(12);
//     stroke(color(0, 75, 65)); 
//     line(blade.x1, blade.y1, blade.x2, blade.y2);
//   }
// }
