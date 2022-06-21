//entry js file
import Car from "./scripts/car";
import GameView from "./scripts/gameView";
import Game from "./scripts/game";
import Track from "./scripts/track";

window.addEventListener('DOMContentLoaded', (event) => {
    // alert('DOM is fully loaded')
    let canvas = document.getElementById("game-view");
    canvas.height = window.innerHeight;
    canvas.width = 500;
    
    const newCar = new Car({
        pos: [canvas.width/2, canvas.height/2],
        vel: [1,0],
        color: "orange"
    });

    const trackObj = new Track({
        name: "test",
        pos: [0,0],
        cars: [newCar]
    });
    let game = new Game(trackObj, newCar);
    let context = canvas.getContext("2d");
    
    // game.addCar(newCar);
    // newCar.draw(context);
    new GameView(newCar, game, trackObj, context).start();
})
// console.log("working")