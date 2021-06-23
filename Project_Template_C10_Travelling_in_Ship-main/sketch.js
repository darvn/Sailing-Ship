var ship
var ship_moving

var sea
var seaimage

function preload(){
  seaimage = loadImage ("sea.png");
  ship_moving = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(1200,800);
 
  sea = createSprite (200, 200);
  sea.addImage (seaimage);
  ship = createSprite (200, 275);
  ship.addAnimation ("moving", ship_moving);
  ship.scale  = 0.3;

  
}

function draw() {
 background("blue")
 sea.velocityX = -5;

 if (sea.x < 0){
   sea.x = sea.width/2;
 }
 drawSprites();
 }