class Drop {
    constructor(x,y){
        var options = {
            isStatic : false,
            'density' : 0.5,
            'friction' : 0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world , this.rain);
    }
    draw(){
        var pos = this.rain.position;
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    update(){
        if( this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }

}