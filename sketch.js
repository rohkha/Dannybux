var backgroundImg, shrekImg, bojoImg, spongebobImg, logoImg, questionImg, counterImg, chipImg;
var song;
var dannyBux, raulBux, gameState;
var more, less, start;
var displayX, displayY;
var title, question;
var card1, card2, card3, card4, card5, card6;
var card1Img, card2Img, card3Img, card4Img, card5Img, card6Img;
var dannyBar, raulBar, font;
var dannyBarImg, raulBarImg;

function preload() {
  backgroundImg = loadImage("assets/background.png");
  shrekImg = loadImage("assets/buttons/shrek.png");
  bojoImg = loadImage("assets/buttons/bojo.png");
  spongebobImg = loadImage("assets/buttons/spongebob.png");
  logoImg = loadImage("assets/Logo.png");
  questionImg = loadImage("assets/Question.png");
  counterImg = loadImage("assets/Dannybux counter.png");
  chipImg = loadImage("assets/chip.png");
  song = loadSound("assets/Music.mp3");
  font = loadFont("assets/ARLRDBD.ttf");

  card1Img = loadImage("assets/Guessing Options/1000D.png");
  card2Img = loadImage("assets/Guessing Options/5000D.png");
  card3Img = loadImage("assets/Guessing Options/5R.png");
  card4Img = loadImage("assets/Guessing Options/100R.png");
  card5Img = loadImage("assets/Guessing Options/500R.png");
  card6Img = loadImage("assets/Guessing Options/1000R.png");

  dannyBarImg = loadImage("assets/Dannybux counter.png");
  raulBarImg = loadImage("assets/Raul counter.png");

  gameState = 0;
  dannyBux = 500;
  raulBux = 0;

  
}
  
function setup() {
  displayX = windowWidth;
  displayY = windowHeight;
  createCanvas(displayX,displayY);
  
  more = new Button(displayX/3, displayY/3*2, displayY/5000);
  less = new Button(displayX/3*2, displayY/3*2, displayY/5000);
  start = new Button(displayX/2, displayY/3*2, displayY/5000);
  title = new logo(logoImg, displayX/2, displayY/4, displayY/3000);
}

function draw() {
  background(backgroundImg);
  
  more.handleHiding();
  less.handleHiding();
  start.handleHiding();
  title.draw();

  start.handleMousePress();

  if (gameState == 0) {
    start.drawStart();
  }

  if (gameState == 1) {
    title.delete();

    //guessing cards
    card1 = new cards(card1Img, displayX/4*1, displayY/3*1, 0.1);
    card1.draw();

    card2 = new cards(card2Img, displayX/4*2, displayY/3*1, 0.1);
    card2.draw();

    card3 = new cards(card3Img, displayX/4*3, displayY/3*1, 0.1);
    card3.draw();

    card4 = new cards(card4Img, displayX/4*1, displayY/3*2, 0.1);
    card4.draw();

    card5 = new cards(card5Img, displayX/4*2, displayY/3*2, 0.1);
    card5.draw();

    card6 = new cards(card6Img, displayX/4*3, displayY/3*2, 0.1);
    card6.draw();

    //display coins
    displayMoney();
  }
  
  if (gameState == 2) {
    question = new logo(questionImg, displayX/2, displayY/4, displayY/3000);
    question.draw();

    more.drawMore();
    less.drawLess();
  }
  drawSprites();
}

function displayMoney() {
  dannyBar = createSprite(110, 110);
  dannyBar.addImage(dannyBarImg);
  dannyBar.scale = 0.1;
  textFont(font);
  textSize(40);
  fill(0);
  text(dannyBux, 220, 90);


  raulBar = createSprite(110, displayY -  110);
  raulBar.addImage(raulBarImg);
  raulBar.scale = 0.1;
  textFont(font);
  textSize(40);
  fill(0);
  text(raulBux, 220, displayY - 70);
}
