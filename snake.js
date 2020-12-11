class Snake{

    constructor(){

        
        this.xSpeed = 0;
        this.ySpeed = 0;

        this.body = [];
        this.body[0] = createVector(0,0);
        this.len = 0;

    }



    endGame(){

        var x=  this.body[this.body.length-1].x;
        var y=  this.body[this.body.length-1].y;

        if(x>col-1 || x<0 || y>row-1 || y<0){
            return true;
        }
        for(var i = 0;i<this.body.length-1;i++){

            var part = this.body[i];
            if(part.x === x && part.y === y){

                return true;
            }
            return false;
        }




    }
   grow(){

    var head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);

    }

    eat(pos){

        var xp =  this.body[this.body.length-1].x;
        var yp =  this.body[this.body.length-1].y;
        var d = dist(xp,yp,pos.x,pos.y);

       if(d<1){
            this.grow();
           return true;
        
        }  return false;
    }
    setDir(x,y){
        this.xSpeed = x;
        this.ySpeed = y;
    }

    update(){
        
      var head = this.body[this.body.length-1].copy();
       this.body.shift();

       head.x += this.xSpeed;
        head.y += this.ySpeed;

        this.body.push(head);



        //this.body[0].x += this.xSpeed;
       // this.body[0].y += this.ySpeed;

    }

    show(){

      for(var i = 0;i<this.body.length;i++){

            noStroke();
            fill(0);
            rect(this.body[i].x,this.body[i].y,1,1);
        
        }

    }

























}