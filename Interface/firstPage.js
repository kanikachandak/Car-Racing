class Form
{
    constructor()
    {
        this.title=createElement('h1');
        this.input=createInput("Enter your name: ");
        this.button=createButton('START');
        this.greeting=createElement('h2');
    }
    display()
    {
        this.title.html("Car Racing");
        this.title.position(displayWidth/2-50,100);
        this.input.position(displayWidth/2-50,200);
        this.button.position(displayWidth/2-50,300);
       
        this.button.mousePressed(()=>{
           this.title.hide();
           this.button.hide();
           this.input.hide(); 
           player.name=this.input.value();
           playerCount=playerCount+1;
           player.update();
           player.updateCount(playerCount);
           this.greeting.html("Hello "+player.name);
           this.greeting.position(displayWidth/2-50,250);
        });
    }
}