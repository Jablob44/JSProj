// import * as car from "./car"
class GameView{
    constructor(car, game, track, ctx){
        this.car = car;
        this.game = game;
        this.ctx = ctx;
        this.moves = {
            w: [0,-1],
            a: [-1,0],
            s: [0,1],
            d: [1,0]
        };
        this.track = track;
    }

    handleKeyBindings(){
        const car = this.car;
        const track = this.track;
        const moves = this.moves;

        Object.keys(moves).forEach((i) => {
            const move = moves[i];
            key(i, () => {car.power(move)});
        });

        Object.keys(moves).forEach((i) => {
            const move = moves[i];
            const deg = 1;
            // console.log(i);
            // if(i !== 'a' && i !== "d"){
                key(i, () => {track.power(move)});
            // }
            // else{
                // key(i, () => {track.turnPower(deg, this.ctx)})
            // }
        });


    }

    start(){
        this.handleKeyBindings();
        setInterval(() => {
            this.game.moveCars();
            this.game.draw(this.ctx);
        }, 20);
    }
}

export default GameView;