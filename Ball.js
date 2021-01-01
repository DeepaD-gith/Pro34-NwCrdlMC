class Ball
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.radius = r;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        
      
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        
        push();
          rectMode(CENTER);    
          translate(pos.x,pos.y);    
          fill("brown");
          circle(0,0,this.radius);
        pop();
    }
}