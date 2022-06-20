//entry js file
import Car from "./scripts/car";
import GameView from "./scripts/gameView";
import Game from "./scripts/game";

window.addEventListener('DOMContentLoaded', (event) => {
    // alert('DOM is fully loaded')
    let game = new Game();
    let canvas = document.getElementById("game-view");
    let context = canvas.getContext("2d");
    const newCar = new Car({
        pos: [100,100],
        vel: [1,0],
        color: "orange"
    });
    game.addCar(newCar);
    // newCar.draw(context);
    new GameView(newCar, game, context).start();
})
// console.log("working")