class polygon {
constructor(x,y,r){
    var options = {
       
        'restitution':0.10,
        'friction':1.0,
       'density':1.0
        
      }
      this.body = Bodies.circle(x,y,r,options);

      this.x=x;
          this.y=y;
           this.r=r
      World.add(world, this.body);
    }
      display(){

        var paperpos=this.body.position; 
                   push() 
                   translate(paperpos.x, paperpos.y);
                    rectMode(CENTER) 
                    fill(255,0,255)
                    ellipse(0,0,this.r,this.r)
                        pop()



        //'restitution':0.10,
        //'friction':1.0,
       // 'density':1.0



    }































}