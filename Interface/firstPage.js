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
        this.title.position(150,100);
        this.input.position(150,200);
        this.button.position(150,300);
       
        this.button.mousePressed(()=>{
           this.title.hide();
           this.button.hide();
           this.input.hide(); 
           var name=this.input.value();
           playerCount=playerCount+1;
           
           this.greeting.html("Hello "+name);
           this.greeting.position(150,250);
        });
    }
}