class BaseClass{
    constructor(x,y,w,h,a){
       var option={
         restitution:0.5,
         friction:1.5,
         density:1.0 
       } 
       this.body=Bodies.rectangle(x,y,w,h,option);
       this.image=loadImage("sprites/base.png")
       this.w=w;
       this.h=h;
       World.add(myworld,this.body);
    }
    display(){
     
      push()  
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0,this.w,this.h);
      pop()       
    }
}