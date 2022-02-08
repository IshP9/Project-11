var trackImage, track
var runner,runnerImage
var invisibleLeftBoundary
var invisibleRightBoundary
function preload(){
  //pre-load images
  trackImage = loadImage("path.png")
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
   invisibleLeftBoundary = createSprite(50,200,5,200)
   invisibleLeftBoundary.visible = false
   invisibleRightBoundary = createSprite(350,200,5,200)
   invisibleRightBoundary.visible = false
   
  track = createSprite(200,200,400,400)
  track.addImage("track",trackImage)
  track.velocityY = 7

  runner = createSprite(200,200,50,50)
  runner.addAnimation("runner", runnerImage)
  runner.scale = 0.1
  //track.y = track.width / 2
 
}

function draw() {
  background(0);
if(keyDown("right")){
  runner.velocityX = 8 
}
if(keyDown("left")){
  runner.velocityX = -8
}
 if(track.y > 400){
   track.y = height/2;
 }
runner.collide(invisibleLeftBoundary)
 runner.collide(invisibleRightBoundary)
  drawSprites();
}
