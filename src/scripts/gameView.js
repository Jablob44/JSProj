// import * as car from "./car"
import Util from "./util";
class GameView{
    constructor(car, game, track, ctx){
        this.car = car;
        this.game = game;
        this.ctx = ctx;
        this.moves = {
            w: [0,-1],
            a: [-1, 0],
            s: [0,1],
            d: [1, 0]
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
        const slow = [0, 2];

        Object.keys(moves).forEach((i) => {
            const move = moves[i];
            const deg = 10;
            // console.log(i);
            if(i === 'w' || i === 's'){
                key(i, () => {
                    this.track.power(move);
                    if (i === 'w'){
                        car.playAcc();
                        car.pauseDec();
                        car.pauseIdle();
                    }else{
                        car.playDec();
                        car.pauseAcc();
                        car.pauseIdle();
                    }
                });
                // console.log("in if")
            }
            else{
               key(i, () => {
                    car.playIdle();
                    car.pauseAcc();
                    car.pauseDec();
                    // this.track.turnPower(move, this.ctx);
                    // let carVel = this.track.getVel();
                    if (this.track.getVel()[1] > 0){
                        if (this.track.getVel()[1] > 3){
                            this.track.power(slow);
                        }
                        this.track.power(move)
                        this.car.turn(i, deg);
                    }
                    if (this.track.getVel()[0] > 7){
                        this.track.setSideVel(7)
                        this.car.turn(i, deg-20)
                    }
                    if (this.track.getVel()[0] < -7){
                        this.track.setSideVel(-7)
                        this.car.turn(i, deg-20)
                    }
                    // if (carVel[1] > 0){
                    // }
                    // this.track.power(slow);
                    // Util.rotateImg()
                    // Util.rotateImg(ctx, this.car.getImage(), this.car.getPos()[0], this.car.getPos()[1], 50, 100, 180);

                })
            //     console.log("turn power", move)
            }
        });
        // this.track.power(slow)


    }

    start(endOfLap){
        if(!endOfLap){
            this.handleKeyBindings();
        }
        let theCar = this.car
        this.track.setMap("test", this.ctx, theCar);
        
        let gamepl = setInterval(() => {
            console.log(endOfLap);
            if (this.track.getVel()[1] > 15){
                this.track.setVel(15);
            }
            if (!endOfLap){
                this.game.moveCars();
                this.game.draw(this.ctx);
            }
            else{
                console.log("the gamepl:", gamepl);
                clearInterval(gamepl);
            }
            // if (this.track.getPos()[1] >= 4078){
                
            // }
        }, 20);
    }
}

export default GameView;