class Game
{
    constructor()
    {

    }
    
    getState()
    {
        var gamestateRef=database.ref('gamestate');
        gamestateRef.on('value', (data) => 
        {
            gamestate=data.val();
        })
    }
    update(state)
    {
        database.ref('/').update({
           'gamestate': state 
        });
    }
    async start()
    {
        if(gamestate==0)
        {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value'); //listening to player Count
            if(playerCountRef.exists())     //if player is present
            {
                playerCount = playerCountRef.val(); //reference
                player.getCount();      //extract
            }
            form = new Form();
            form.display(); 
        }
        car1 = createSprite(100, 200, 30, 30);
        car1.addImage("Car 1", c1Img);
        car2 = createSprite(300, 200, 30, 30);
        car2.addImage("Car 2", c2Img);
        car3 = createSprite(500, 200, 30, 30);
        car3.addImage("Car 3", c3Img);
        car4 = createSprite(700, 200, 30, 30);
        car4.addImage("Car 4", c4Img);
        cars = [car1, car2, car3, car4];
    }

    play()
    {
        form.hide();
        Player.playerInfo();
        if(allPlayers!=undefined)
        {
            background(130, 130, 130);
            image(trackImg, 0, -displayHeight*5, displayWidth, displayHeight*5); //displayHieght is from lower base
            var index = 0;
            var  x = 100;
            var y;
            for(var i in allPlayers) // i has to be in allPlayers (index). It increases till length-1
            {
                index = index+1;
                x = x + 200;
                y = displayHeight - allPlayers[i].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index==player.index)
                {
                    cars[index-1].shapeColor = "red"; //only to see your own car red
                    camera.position.x = displayWidth/2; //focus of game display and not cars
                    camera.position.y = cars[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!=null)
        {
            player.distance = player.distance+30;
            player.update();
        }
        if(player.distance>=3500)
        {
            gamestate = 2;
        }
        drawSprites();
    }

    end()
    {
        console.log("Game Ended!");
    }
}