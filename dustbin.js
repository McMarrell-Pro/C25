class Dustbin{
constructor(x,y,width,height){
var options = {isStatic:true}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("Sprites/dustbin.png");
World.add(world,this.body);
}
display(){
    rectMode(CENTER);
    fill("white");
    image(this.image,this.body.position.x,this.body.position.y,200,200);
    
}

}