var b1,b2;
function setup() {
  createCanvas(1200,800);
  b1=createSprite(600, 500, 50, 50);
  b1.shapeColor="grey"
  b1.velocityY=-3
  b2=createSprite(600, 100, 70, 30);
  b2.shapeColor="yellow"
  //b2.velocityY=-3
}
function draw() {
  background(40,50,100);  
  //b2.x=World.mouseX
  //b2.y=World.mouseY
  
    //b1.shapeColor="yellow"
    //b2.shapeColor="yellow"
  }
if(b1.y-b2.y<b1.height/2+b2.height/2&&
  b2.y-b1.y<b1.height/2+b2.height/2){
    b2.velocityY=b2.velocityY*(-1)
    b1.velocityY=b1.velocityY*(-1)
}

  drawSprites();
}
function colllide(){
  if(b1.x-b2.x<b1.width/2+b2.width/2&&
    b2.x-b1.x<b1.width/2+b2.width/2){
      b2.velocityX=b2.velocityX*(-1)
      b1.velocityX=b1.velocityX*(-1)



}