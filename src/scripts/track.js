import Util from "./util";
class Track{
    constructor(options){
        this.map = new Image();
        this.name = options.name;
        this.pos = options.pos;
        this.cars = options.cars;
        this.rotation = -90;
        // console.log("new track")
        this.carVel = this.cars[0].getVel();
        this.vel = [this.carVel[0] * -1, this.carVel[1] * -1];
    }

    setMap(name, ctx, carpos){
        // if(name === "test"){
        //     this.map.src = "./assets/track.jpeg";
        //     // console.log("set map");
        // }
        // else{
            this.map.src = "./assets/TrackGrass.png"
        // }
        Util.rotateImgTrack(ctx, this.map, carpos[0], carpos[1], 9000, 2000, this.cars[0].getPos(), this.rotation);
    }

    getVel(){
        return this.vel;
    }

    getPos(){
        return this.pos;
    }

    setVel(newVel){
        this.vel = [this.vel[0], newVel];
    }

    setSideVel(newVel){
        this.vel = [newVel, this.vel[1]];
    }

    setFullVelocity(vel){
        this.vel = vel;
    }

    draw(ctx){
        // this.setMap();
        // let track = ctx.drawImage(this.map, this.pos[0], this.pos[1], 3000, 1500);
        // Util.rotateImg(ctx, this.map, carpos[0], carpos[1], 4000, 2000, this.rotation);
        console.log(this.pos);
        Util.rotateImgTrack(ctx, this.map, this.pos[0], this.pos[1], 9000, 2000, this.cars[0].getPos(), this.rotation);
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

    // turnPower(deg){ //ctx
    //     this.rotation += deg;
    //     // Util.rotateImg(ctx, this.map, this.pos[0], this.pos[1], 8000, 4000, deg);
    // }

    move(){
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
}

export default Track;