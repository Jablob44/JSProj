import Car from "./car";
import GameView from "./gameView";
import Game from "./game";
import Track from "./track";
import Util from "./util";
class GamePlay{
    constructor(){
        this.times = [];
    }

    mainMenu(){
        let mainMenu = document.getElementById("Main-menu");
        let gameView = document.getElementById("game");
        let startButton = document.getElementById("start-button");
        startButton.addEventListener('click', () => {
            mainMenu.style.display = "none";
            gameView.style.display = "flex";
            this.gp()
        })
    }
    
    gp(){
        let lapOver = false;
        let canvas = document.getElementById("game-view");
        canvas.height = window.innerHeight;
        canvas.width = 700;
    
        let newCar = new Car({
            pos: [canvas.width/2-25, canvas.height/2+200],
            vel: [0,0],
            color: "orange"
        });

        let trackObj = new Track({
            name: "hillclinb",
            //name: "test",
            // pos: [canvas.width/2-25, canvas.height/2],
            pos: [153, -3488],
            //finish line: 3878
            cars: [newCar]
        });
        let game = new Game(trackObj, newCar);
        let context = canvas.getContext("2d");
        
        // game.addCar(newCar);
        // newCar.draw(context);
        let gameView = new GameView(newCar, game, trackObj, context)
        gameView.start(lapOver);
        let lastTime;
        let pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener('click', () => {
            this.onPause(trackObj, newCar);
        })
        document.addEventListener('keypress', (event) => {
            // console.log("--------------------------");
            let sec = 0;
            let tens = 0;
            let ten = 0
            let min = 0;
            const timerInt = setInterval(() => {
                let timer = document.getElementById("timer");
                sec++;
                // console.log(tens+sec);
                if(sec === 10){
                    sec = 0;
                    tens++;
                    ten = tens*10;
                }
                if(ten+sec >= 60){
                    sec = 0;
                    tens = 0;
                    min++;
                    ten = 0
                }
                timer.innerHTML=min+":"+tens+sec;
                // console.log("current pos:", trackObj.getPos())
                if (trackObj.getPos()[1] >= 3857 && lapOver === false){
                    lapOver = true;
                    lastTime = min+":"+tens+sec;
                    this.times.push(lastTime);
                    // console.log("the current value representing the time!!!!!!!:", lastTime);
                    this.updateBoard();

                    clearInterval(timerInt);

                    this.endOfLap(trackObj, gameView);
                    return null;
                }
            }, 1000);
        }, {once: true});
    }

    updateBoard(){
        let scoreBoard = document.getElementById("score-board");
        console.log("the times:", this.times)
        let allTimes = this.times.sort();
        scoreBoard.innerHTML='';
        allTimes.forEach(element => {
            let li = document.createElement("li");
            li.innerHTML = element;
            console.log("the li:", li);
            scoreBoard.appendChild(li);
        });
    }

    endOfLap(track, gameView){
        let endOfLap = document.getElementById("end-of-lap");
        let newLapButton = document.getElementById("new-lap-button");
        endOfLap.style.display = "block";
        track.setFullVelocity([0,0]);
        newLapButton.addEventListener('click', () => {
            // context.clearRect(0, 0, canvas.width, canvas.height);
            endOfLap.style.display = "none";
            gameView.start(true)
            this.gp();
        });
    }

    onPause(track, car){
            let pauseMenu = document.getElementById("pause-menu");
            let muted = false;
            pauseMenu.style.display = "block";
            let pausedVel = track.getVel();
            track.setFullVelocity([0,0]);
            let resume = document.getElementById("resume-button");
            let mute = document.getElementById("mute-button");
            let unmute = document.getElementById("unmute-button");
            resume.addEventListener('click', () => {
                pauseMenu.style.display = "none";
                track.setFullVelocity(pausedVel);
            });
            mute.addEventListener('click', () => {
                car.mute();
                mute.style.display = "none";
                unmute.style.display = "block";
                muted = true;
            });
            if (muted){
                unmute.addEventListener('click', () => {
                    car.unmute();
                    mute.style.display = "block";
                    unmute.style.display = "none"
                    muted = false;
                });
            }



    }
}

// const gamePlay = {
//     onPause(){
//         //pause button functionality
//     },
//     gp(){
//         let canvas = document.getElementById("game-view");
//         canvas.height = window.innerHeight;
//         canvas.width = 700;
    
//         const newCar = new Car({
//             pos: [canvas.width/2-25, canvas.height/2+200],
//             vel: [0,0],
//             color: "orange"
//         });

//         let trackObj = new Track({
//             name: "hillclinb",
//             //name: "test",
//             // pos: [canvas.width/2-25, canvas.height/2],
//             pos: [100, -3737],
//             //finish line: 3878
//             cars: [newCar]
//         });
//         let game = new Game(trackObj, newCar);
//         let context = canvas.getContext("2d");
        
//         // game.addCar(newCar);
//         // newCar.draw(context);
//         new GameView(newCar, game, trackObj, context).start();
//         let lastTime;
//         document.addEventListener('keypress', (event) => {
//             let sec = 0;
//             let tens = 0;
//             let ten = 0
//             let min = 0;
//             const timerInt = setInterval(() => {
//                 let timer = document.getElementById("timer");
//                 sec++;
//                 console.log(tens+sec);
//                 if(sec === 10){
//                     sec = 0;
//                     tens++;
//                     ten = tens*10;
                    
//                 }
//                 if(ten+sec >= 60){
//                     sec = 0;
//                     tens = 0;
//                     min++;
//                     ten = 0
//                 }
//                 timer.innerHTML=min+":"+tens+sec;
//                 console.log("current pos:", trackObj.getPos())
//                 if (trackObj.getPos()[1] >= 4022){
//                     lastTime = min+":"+tens+sec;
//                     clearInterval(timerInt);
//                 }
//               console.log("the current value representing the tens value!!!!!!!:", ten+sec);
//             }, 1000);
//         }, {once: true});
//     }
// }

export default GamePlay;