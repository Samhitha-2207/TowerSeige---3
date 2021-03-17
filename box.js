class Box {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.Visiblity = 255;
    }

    score(){
        if(this.visibility<0 && this.visibility>=105) {
            score++;
        }
    }

    display(){
        if(this.body.speed<3){
            rect(this.body.position.x,this.body.position.y,50,50)
        } else {
            World.remove(world,this.body);
        }
    }
}