class Chain
{
  constructor(body1,body2,offsetX)
  {
    this.offsetX=offsetX;
     var options= {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:0}
           }
     this.body = Constraint.create(options);
     
     World.add(world,this.body);

   

  }

  display()
  {
      var posA = this.body.bodyA.position;
      var posB = this.body.bodyB.position;

      var Anchor2X = posB.x + this.offsetX;
      
      // console.log("PosA x" + posA.x);
      // console.log("PosA y" + posA.y);
      
      // console.log("Anchor2 x" + Anchor2X);
      // console.log("PosB y" + posB.y);

      push();
      
      stroke("red");
      strokeWeight(2);
      line(posA.x,posA.y,Anchor2X,posB.y);

      pop();   

  }

  


}