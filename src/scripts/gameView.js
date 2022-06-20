// import * as car from "./car"
class GameView{
    constructor(car, game, ctx){
        this.car = car;
        this.game = game;
        this.ctx = ctx;
        this.moves = {
            w: [0,-1],
            a: [-1,0],
            s: [0,1],
            d: [1,0]
        };
        this.track = document.querySelector(".track");
    }

    handleKeyBindings(){
        const car = this.car;
        const moves = this.moves;

        Object.keys(moves).forEach((i) => {
            const move = moves[i];
            key(i, () => {car.power(move)});
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