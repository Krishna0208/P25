class Paper {
    constructor(x,y,radius) {
    
    var option = {
    isStatic: false,
    restitution: 0.3,
    density: 1.3,
    friction: 0.5
    }
    
    this.body = Bodies.circle(x,y,radius,option);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("images/paper.png");
    World.add(world,this.body);    
}

    display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }

}   
