var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.scale = 0.05;
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.lifetime = 100;
}

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.scale = 0.05;
  leaves.addImage(leafImg);
  leaves.velocityY = 3;
  leaves.lifetime = 100;   
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;
  /*if((apple.x >= rabbit.x + 5) && (apple.x <= rabbit.x + 20) ) {
    apple.lifetime = 0;
  }*/
  createAppleOrLeaf();
  
  drawSprites();
}

function createAppleOrLeaf(){
  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(select_sprites == 1) {
      createApples();
    } else {
      createLeaves();
    }
  }
}