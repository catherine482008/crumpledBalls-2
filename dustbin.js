class dustbin{
    constructor(x,y,width,height){
           var options={
                  isStatic:true
           }
   this.body=Bodies.rectangle (x,y,width,height);
           World.add (world,this.body);
           this.image=loadImage()
           this.width=width;
           this.height=height;
    }
           display(){
          var pos=this.body.position;
           fill("red")
           
           rect(pos.x,pos.y,this.width,this.height)
   
   
           }
    }