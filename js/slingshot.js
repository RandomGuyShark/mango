class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        if(this.body.bodyA ){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y)
        }
    }
    fly(){
        this.body.bodyA = null
    }
    attach(body){
        this.body.bodyA = body
    }
}