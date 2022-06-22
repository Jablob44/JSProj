// import * as car from "./car"
import Util from "./util";
class GameView{
    constructor(car, game, track, ctx){
        this.car = car;
        this.game = game;
        this.ctx = ctx;
        this.moves = {
            w: [0,-1],
            a: 1,
            s: [0,1],
            d: -1
        };
        this.track = track;
    }

    handleKeyBindings(){
        const car = this.car;
        const track = this.track;
        const moves = this.moves;

        // Object.keys(moves).forEach((i) => {
        //     const move = moves[i];
        //     key(i, () => {
        //         car.power(move);
        //         // car.playSound(i);
        //     });
        // });

        Object.keys(moves).forEach((i) => {
            const move = moves[i];
            const deg = 1;
            console.log(i);
            if(i === 'w' || i === 's'){
                key(i, () => {
                    this.car.turn(i, this.ctx);
                    this.track.power(move);
                });
                console.log("in if")
            }
            else{
                key(i, () => {
                    this.car.turn(i, this.ctx);
                    this.track.turnPower(move, this.ctx);
                    // Util.rotateImg()
                    // Util.rotateImg(ctx, this.car.getImage(), this.car.getPos()[0], this.car.getPos()[1], 50, 100, 180);
                })
                console.log("turn power", move)

            }
        });


    }

    start(){
        this.handleKeyBindings();
        let theCar = this.car
        this.track.setMap("test", this.ctx, theCar);
        setInterval(() => {
            this.game.moveCars();
            this.game.draw(this.ctx);
        }, 20);
    }
}

export default GameView;