class A{
    constructor(bodyA,bodyB){
        var Options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this. a = constraint.create(Options)
            World.add(world,this.a)
    }
    display(){
        var pointA=this.a.bodyA.position
        var pointB=this.a.bodyB.position
        strokeWeight(2)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}