class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
          
            bodyA:body1,        
            bodyB:body2,
            poinB:{x:this.offsetX,y:offsetY}
           
            
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope)
    }
    display(){
      push  ();
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
        var anchor1X=pointA.x;
        var anchor1Y=pointA.y;
        var anchor2X=pointB.x+this.offsetX;
        var anchor2Y=pointB.y+this.offsetY;

        line (anchor1X,anchor1Y,anchor2X,anchor2Y);
    pop();
    }
    
        
    }