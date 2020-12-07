class Ground{
  constructor(x,y,w,h){
     var option={
        isStatic: true 
     } 
     this.ground=Bodies.rectangle(x,y,w,h,option);
     this.w=w;
     this.h=h;
     World.add(myworld,this.ground);
   }
   display(){
     fill("brown");
     rectMode(CENTER);
     rect(this.ground.position.x,this.ground.position.y,this.w,this.h)  
   }
}