class Particle{

    constructor(x,y,r){
        var options = {
       setStatic:true
        }
        this.body = Bodies.circle(x,y,this.r,options)
        this.width=1000
        this.height=20
    }
    display(){

        this.color=color(random(0,255),random(0,255),random(0,255))
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}