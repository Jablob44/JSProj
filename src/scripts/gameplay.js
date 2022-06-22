import Car from "./car";
import GameView from "./gameView";
import Game from "./game";
import Track from "./track";
import Util from "./util";

const gamePlay = {
    gp(){
        let canvas = document.getElementById("game-view");
    canvas.height = window.innerHeight;
    canvas.width = 700;
    
    const newCar = new Car({
        pos: [canvas.width/2-25, canvas.height/2],
        vel: [0,0],
        color: "orange"
    });

    const trackObj = new Track({
        name: "test",
        // pos: [canvas.width/2-25, canvas.height/2],
        pos: [100,-1000],
        cars: [newCar]
    });
    let game = new Game(trackObj, newCar);
    let context = canvas.getContext("2d");
    
    // game.addCar(newCar);
    // newCar.draw(context);
    new GameView(newCar, game, trackObj, context).start();
    document.addEventListener('keypress', (event) => {
        Util.timer();
    }, {once: true});
    }
}

export default gamePlay;