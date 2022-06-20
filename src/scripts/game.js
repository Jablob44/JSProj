import Car from "./car";
import Util from "./util";

class Game{
    constructor(){
        this.cars = []
        this.DIM_X = 800
        this.DIM_Y = 600
    }

    addCar(car){
        this.cars.push(car)
    }
    draw(ctx){
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.cars.forEach((c) => {
            c.draw(ctx);
        });
    }

    moveCars(){
        this.cars.forEach((c) => {
            c.move();
        })
    }
}
export default Game;