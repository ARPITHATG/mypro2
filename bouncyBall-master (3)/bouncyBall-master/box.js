class Box{

    constructor(x, y, width, height){
         
        var options = {

            restitution: 0.4,
            friction: 1,
            density: 0.6
        }


        this.body = Bodies.rectangle(this.x, this.y , this.width, this.height, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }


    display(){


        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y)
        rotate(angle)
        
        rect(0, 0 ,this.width, this.height)
        pop()
    }












}