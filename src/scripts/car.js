// import * as util from "./util";
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
    }

    setImage(){
        if(this.color === "orange"){
            this.image.src = "./assets/pitstop_car_10.png";
        }
    }

    draw(ctx){
        this.setImage();
        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        ctx.drawImage(this.image, this.pos[0], this.pos[1]);
        // ctx.arc(
        //     this.pos[0],
        //     this.pos[1],
        //     7,
        //     0,
        //     2 * Math.PI,
        //     false
        // );
        // ctx.fill();
    }

    power(impulse) {
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];
    }

    move(){
        if (this.vel[0] < 1 && this.vel[1] < 1){
            this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
            // this.canvas.style.translate(this.pos[0], this.pos[1]);
        }
    }

    // moveBack(){

    // }
}

export default Car;