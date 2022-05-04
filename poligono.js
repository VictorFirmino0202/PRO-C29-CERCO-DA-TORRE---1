class Poligono{
    constructor(x, y, width, height, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, width, height, radius, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
      }
}
