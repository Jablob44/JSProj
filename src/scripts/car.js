import Util from "./util";
class Car{
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        // this.radius = options.radius;
        this.color = options.color;
        // this.game = options.game;
        // this.currentSpeed = 0;
        // this.canvas = document.getElementsByClassName("game-view");
        this.image = new Image();
        // this.track = new component
    }

    getVel(){
        return this.vel;
    }

    setImage(){
        if(this.color === "orange"){
            this.image.src = "./assets/pitstop_car_10.png";
        }
    }

    draw(ctx){
        this.setImage();
        // let carImg = ctx.drawImage(this.image, this.pos[0], this.pos[1], 50, 100);
        Util.rotateImg(ctx, this.image, this.pos[0], this.pos[1], 50, 100, 180);
    }

    power(impulse) {
        // if (this.vel[0] < 2){
            this.vel[0] += impulse[0];
            this.vel[1] += impulse[1];
        // }
    }

    move(){
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
        // this.canvas.style.translate(this.pos[0], this.pos[1]);
    }

    // moveBack(){

    // }
}

export default Car;