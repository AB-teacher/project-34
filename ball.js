class Ball{
    constructor(x,y,r) {

        var options ={
            restitution: 0.8,
            friction: 0.5,
            density:1.2,
        }
    
        this.body = Bodies.circle(x,y,r/2);
        this.x = x;
        this.y = y;
        this.r = r/2;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world,this.body); 
    }

    display() {
        const pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        //strokeWeight(4);
        //stroke("pink");
        fill("grey")
        //rotate(angle);
        image(this.image,0,0,this.r*4,this.r*4);
        //ellipse(0,0,this.r);
        pop()
    }
}