var database, form, gamestate=0, player, game, playerCount=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game = new Game();
    game.start();
}

function draw(){
    background("white");

}
