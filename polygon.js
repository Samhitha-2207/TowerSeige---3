class Polygon {
    constructor(x,y,sides,radius){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,sides,radius);
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.radius = 40;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    attach(body){
        this.sling.bodyA = polygon;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }
}
