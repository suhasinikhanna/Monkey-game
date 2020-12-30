
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var background, backgroundImage;
var score =0;

//States
var  PLAY =1;
var END = 0;
var gameState =PLAY;

function preload(){
  
monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
 
  backgroundImage = loadImage("download (4).jpg");
  
}



function setup() {
  createCanvas(600,400)
  
  background = createSprite(0,0,600,400);
  background.addImage(backgroundImage);
  background.scale = 2.5

   score = 0;
  
}


function draw() {

drawSprites;
  
text("Score: "+ score, 500,50);
  
}







