import Car from "./car";
import Util from "./util";
import Track from "./track.js";
class Game{
    constructor(track, car){
        this.cars = [car];
        this.track = track;
        this.DIM_X = 800;
        this.DIM_Y = 600;
    }

    addCar(car){
        this.cars.push(car)
    }

    draw(ctx){
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.track.draw(ctx, 90);
        this.cars.forEach((c) => {
            c.draw(ctx);
        });
    }

    moveCars(){
        this.cars.forEach((c) => {
            this.track.move();
            // c.move();
        })
    }
}
export default Game;