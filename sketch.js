var database, form, gamestate=0, player, game, playerCount=0, allPlayers;
var car1, car2, car3, car4, cars;
var c1Img, c2Img, c3Img, c4Img, trackImg;

function preload()
{
    c1Img = loadImage("Images/car1.png");
    c2Img = loadImage("Images/car2.png");
    c3Img = loadImage("Images/car3.png");
    c4Img = loadImage("Images/car4.png");
    trackImg = loadImage("Images/track.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount==4)
    {
        game.update(1);
    }
    if(gamestate==1)
    {
        clear();    
        game.play();
    }
    if(gamestate==2)
    {
        game.end();
    }
}
