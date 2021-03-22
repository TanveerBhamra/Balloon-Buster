var bow, bowImg;
var bg, bg2, bgImage;
var r, b, g, p;
var rImg, bImg, gImg, pImg;
var rGroup, bGroup, gGroup, pGroup;
var arrow, arrowImg, arrowGroup;
var k;
var score = 0;

function preload() {
  //load your images here 
  bgImage = loadImage("background0.png");
  bowImg = loadImage("bow0.png");
  rImg = loadImage("red_balloon0.png");
  bImg = loadImage("blue_balloon0.png");
  gImg = loadImage("green_balloon0.png");
  pImg = loadImage("pink_balloon.png");
  arrowImg = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  score = 0;
  
  bg = createSprite(300, 300, 10, 10);
  bg.addImage("i", bgImage);
  bg.velocityX = -5;
  bg.scale = 3;

  bg2 = createSprite(600, 300, 10, 10);
  bg2.addImage("i", bgImage);
  bg2.velocityX = -5;
  bg2.scale = 3;

  bow = createSprite(550, 300, 10, 10);
  bow.addImage("d", bowImg);

  rGroup = new Group();
  bGroup = new Group();
  gGroup = new Group();
  pGroup = new Group();
  arrowGroup = new Group();
  drawSprites();
}

function draw() {
  arrow = 0;
  background("white");
  if (keyWentDown("Space")) {
    var temp_arrow = createArrow();
    temp_arrow.y = bow.y;
    temp_arrow.lifetime = 40;
  }
  drawSprites();
  textSize(24);
  fill("#000");
  text("Score: " + score, 250, 50);

  if (bg.x < 0) {
    bg.x = 300;
    bg2.x = 600;
  }

  k = Math.round(random(1, 4));

  bow.y = World.mouseY;

  if (frameCount % 100 === 0) {
    switch (k) {
      case 1:
        spawn_red_balloon();
        break;
      case 2:
        spawn_blue_balloon();
        break;
      case 3:
        spawn_green_balloon();
        break;
      case 4:
        spawn_pink_balloon();
        break;
      default:
        break;
    }
  }
  
  if(arrowGroup.isTouching(rGroup) || arrowGroup.isTouching(bGroup)){
    score = score+3;
    rGroup.destroyEach();
    bGroup.destroyEach();
  }
  
  if(arrowGroup.isTouching(gGroup) || arrowGroup.isTouching(pGroup)){
    score = score+5;
    gGroup.destroyEach();
    pGroup.destroyEach();
  }
}

function createArrow() {
  arrow = createSprite(560, 300, 10, 10);
  arrow.velocityX = -15;
  arrow.scale = 0.3;
  arrow.addImage(arrowImg);
  arrowGroup.add(arrow);
  return arrow;
}

function spawn_red_balloon() {
  r = createSprite(0, Math.round(random(20, 580)));
  r.scale = 0.1;
  r.addImage("z", rImg);
  r.lifetime = 200;
  r.velocityX = 3;
  rGroup.add(r);
}

function spawn_blue_balloon() {
  b = createSprite(0, Math.round(random(20, 580)));
  b.scale = 0.1;
  b.addImage("z", bImg);
  b.lifetime = 162;
  b.velocityX = 4;
  bGroup.add(b);
}

function spawn_green_balloon() {
  g = createSprite(0, Math.round(random(20, 580)));
  g.scale = 0.1;
  g.addImage("z", gImg);
  g.lifetime = 120;
  g.velocityX = 5;
  gGroup.add(g);
}

function spawn_pink_balloon() {
  p = createSprite(0, Math.round(random(20, 580)));
  p.scale = 1.1;
  p.addImage("z", pImg);
  p.lifetime = 100;
  p.velocityX = 6;
  pGroup.add(p);
}