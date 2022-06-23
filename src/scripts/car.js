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
        this.rotation = 180;
        this.acc = new Audio();
        this.idle = new Audio();
        this.dec = new Audio();
        this.acc.src = "./assets/2004acc.mp3";
        this.dec.src = "./assets/otherdown2004.mp3";
        this.idle.src = "./assets/idle2004.mp3";
        // this.track = new component
    }

    mute(){
        this.acc.volume = 0;
        this.dec.volume = 0;
        this.idle.volume = 0;
    }

    unmute(){
        this.accvolume = 1;
        this.dec.volume = 1;
        this.idle.volume = 1;
    }

    playAcc(){
        this.acc.play();
    }

    playDec(){
        this.dec.play();
    }

    playIdle(){
        this.idle.play();
    }

    pauseAcc(){
        this.acc.pause();
    }

    pauseDec(){
        this.dec.pause();
    }

    pauseIdle(){
        this.idle.pause();
    }

    getVel(){
        return this.vel;
    }

    getPos(){
        return this.pos;
    }

    getImage(){
        return this.image;
    }

    turn(move, deg){
        // currentRot = this.rotation
        if (move === "a"){
            // console.log("tunring left");
            this.rotation = this.rotation - deg;
            // console.log(this.roatation);
            // this.draw(ctx);
        }else if(move === "d"){
            // console.log("tunring right");
            this.rotation = this.rotation + deg;
            // console.log(this.roatation);
            // this.draw(ctx);
        }
        // else if(move === "w"){
        //     this.rotation = 180;
        //     // this.draw(ctx);
        // }
    }

    setImage(){
        if(this.color === "orange"){
            this.image.src = "./assets/pitstop_car_10.png";
        }
    }

    draw(ctx){
        this.setImage();
        // console.log(this.roatation);
        // let carImg = ctx.drawImage(this.image, this.pos[0], this.pos[1], 50, 100);
        Util.rotateImg(ctx, this.image, this.pos[0], this.pos[1], 50, 100, this.rotation);
    }

    power(impulse) {
        // if (this.vel[0] < 2){
            this.vel[0] += impulse[0];
            this.vel[1] += impulse[1];
        // }
    }

    // playSound(key){
    //     if (key === 'w'){
    //         this.acc.play();
    //     }else if(key === 's'){
    //         this.dec.play();
    //     }else{
    //         this.idle.play();
    //     }
    // }

    move(){
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
        // this.canvas.style.translate(this.pos[0], this.pos[1]);
    }

    // moveBack(){

    // }
}

export default Car;