var bg,bgImg
var invisibleground
var runner,runnerImg
var animals,animalsImg,animalsGroup
var birds,birdsImg,birdsgroup
var gems,gems1,gems2,gems3,gems4,gemsGroup
var gameState=play 
var score
var life=3

function preload(){
  bgImg=loadImage("assets/bg3.png")
  runnerImg=loadAnimation("assets/boy1.png","assets/boy2.png","assets/boy3.png","assets/boy4.png","assets/boy5.png",)
  birdsImg=loadAnimation("assets/rb1.png","assets/rb2.png","assets/rb3.png","assets/rb4.png",)
  gems1=loadImage("assets/g1.png")
  gems2=loadImage("assets/g2.png")
  gems3=loadImage("assets/g3.png")
  gems4=loadImage("assets/g4.png")
}

function setup() {
  createCanvas(1000, 500);
bg=createSprite(500,250,1000,500)
bg.addImage(bgImg)
bg.scale=2.5

invisibleground=createSprite(20,500,3000,20)

runner=createSprite(80,480,60,60)
runner.addAnimation("runner",runnerImg)
score=0
birdsGroup=createGroup()
gemsGroup=createGroup()
  
}

function draw() {
  background(0);
  drawSprites();
textSize(30)
  fill ("white")
  text("Score:"+score,800,50) 
  if(score<0){
runner.velocityX=0
bg.velocityX=0
birdsGroup.destroyEach()
gemsGroup.destroyEach()
strokeWeight(5)
fill("white")
textSize(50)
text("Game Over",400,250)
  }
  bg.velocityX=-3

  if(bg.x<500){
bg.x=1000
  }
  
 if(keyDown("space")){
runner.velocityY=-12
 }
 runner.velocityY+=0.8

    
 spawngems()
 spawnbirds()

 gemsGroup.isTouching(runner,destroyGems)
 birdsGroup.isTouching(runner,destroyBird)

runner.collide(invisibleground)
  
 


}



 
  function spawngems(){
if(frameCount%150===0){
  gems=createSprite(1000,400,10,10)
  gems.addImage(gems3)
  gems.y=Math.round(random(150,500))
  gems.velocityX=-3
  gemsGroup.add(gems)
  gems.lifetime=1000

}
  }

function spawnbirds(){ 
  
  if(frameCount%150===0){
    birds=createSprite(1000,100,10,10)
    birds.addAnimation("flying",birdsImg)
    birds.y=Math.round(random(100,300))
    birds.velocityX=-8
    birdsGroup.add(birds)
    birds.lifetime=1000
  
  }

  

}
function destroyGems(gems,boy){
gems.destroy()
score+=10
}

function destroyBird(bird,boy){
  bird.destroy(
    score-=10
  )

}

