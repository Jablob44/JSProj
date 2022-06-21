import Util from "./util";
class Track{
    constructor(options){
        this.map = new Image();
        this.name = options.name;
        this.pos = options.pos;
        this.cars = options.cars;
        this.carVel = this.cars[0].getVel();
        this.vel = [this.carVel[0] * -1, this.carVel[1] * -1];
        // this.canvas = document.getElementsByClassName("game-view");
    }

    setMap(name){
        if(name = "test"){
            this.map.src = "./assets/track.jpeg";
        }
    }

    draw(ctx, deg){
        this.setMap();
        // let track = ctx.drawImage(this.map, this.pos[0], this.pos[1], 3000, 1500);
        Util.rotateImg(ctx, this.map, this.pos[0], this.pos[1], 3000, 1500, 90);
    }

    power(impulse) {
        this.vel[0] -= impulse[0];
        this.vel[1] -= impulse[1];
        // if (this.vel[0] >= 5){
        //     this.vel[0] = 5;
        // }
        // else if(this.vel[1] >= 5){
        //     this.vel[1] = 5;
        // }
    }

    turnPower(deg, ctx){
        Util.rotateImg(ctx, this.map, this.pos[0], this.pos[1], 3000, 1500, deg);
    }

    move(){
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
}

export default Track;