class Ball {
    constructor(ballType="regular"){
        
        this.ballType = ballType
    }
}
const Ball1 = new Ball()
console.log(Ball1)

const ball2 = new Ball("super")
console.log(ball2)