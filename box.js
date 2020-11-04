class box {
  constructor(x,y,width,height) {
    var options = {
        
        'restitution':0.10,
        'friction':1.0,
        'density':1.0
        
      }
      this.Visibility =255
      

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  

  

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      var pos =this.body.position;
    var angle =this.body.angle
        push()
    fill("blue");
    strokeWeight(10)
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
       
  pop()
    }

     else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      score++
      pop();
    }
    
    
    
   
  }}
