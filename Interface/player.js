class Player
{
    constructor()
    {
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount()
    {
        var playerCountRef=database.ref('playerCount');  //get the count of the players
        playerCountRef.on('value', (data)=>{        //listens to value which is data and stores in playerCount
            playerCount=data.val();
        });
    }
    updateCount(count)      //updates only the number of players
    {
        database.ref('/').update({      
            playerCount:count
        });
    }
    update()    //updates the other information of the players
    {
        var playerIndex="players/player"+this.index;    //new folder for every player
        database.ref(playerIndex).set({  
            name: this.name,                    //creating attributes
            distance: this.distance
        });
    }
    static playerInfo()   //assembles info
    {
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers=data.val();          //allPlayers is an array?
        });
    }
}