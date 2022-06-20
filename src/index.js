//entry js file
import Car from "./scripts/car";
import GameView from "./scripts/gameView";
import Game from "./scripts/game";
import Track from "./scripts/track";

window.addEventListener('DOMContentLoaded', (event) => {
    const newCar = new Car({
        pos: [100,100],
        vel: [1,0],
        color: "orange"
    });

    const trackObj = new Track({
        name: "test",
        pos: [0,0],
        cars: [newCar]
    });
    // alert('DOM is fully loaded')

    let game = new Game(trackObj, newCar);
    let canvas = document.getElementById("game-view");
    canvas.height = window.innerHeight;
    canvas.width = 500;
    let context = canvas.getContext("2d");
    
    // game.addCar(newCar);
    // newCar.draw(context);
    new GameView(newCar, game, trackObj, context).start();
})
// console.log("working")