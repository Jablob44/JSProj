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
        // console.log(theCar.getPos());
        // let car = this.cars[0];
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.track.draw(ctx);
        this.cars.forEach((c) => {
            c.draw(ctx);
        });
    }

    moveCars(){
        this.cars.forEach((c) => {
            this.track.move();
            // c.move(); update
        })
    }
}
export default Game;