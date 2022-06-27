import Car from "./car";
import GameView from "./gameView";
import Game from "./game";
import Track from "./track";
import Util from "./util";
class GamePlay{
    constructor(){
        this.lapOver = false;
        this.times = [];
        this.canvas = document.getElementById("game-view");
        this.canvas.height = window.innerHeight;
        this.canvas.width = 700;
        this.car = new Car({
            pos: [this.canvas.width/2-25, this.canvas.height/2+200],
            vel: [0,0],
            color: "orange"
        });
        this.track = new Track({
            name: "hillclinb",
            //name: "test",
            // pos: [canvas.width/2-25, canvas.height/2],
            pos: [153, -3488],
            //finish line: 3878
            cars: [this.car]
        });
        this.game = new Game(this.track, this.car);
        this.context = this.canvas.getContext("2d");
        this.gameView = new GameView(this.car, this.game, this.track, this.context)
        this.gameView.start(this.lapOver);
        this.isPaused = false;

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
        // this.times = new set(times)
        // let currentTime = 0;
        this.car.pos = [this.canvas.width/2-25, this.canvas.height/2+200];
        this.car.vel = [0,0];
        this.car.rotation = 180;
        this.track.vel = [0,0];
        this.track.pos = [153, -3488];
        this.track.carVel = this.car.getVel();
        this.track.vel = [this.track.carVel[0] * -1, this.track.carVel[1] * -1];
        let pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener('click', () => {
            this.onPause(this.track, this.car);
        })
        this.timer(this.lapOver);
        // let newCar = new Car({
        //     pos: [canvas.width/2-25, canvas.height/2+200],
        //     vel: [0,0],
        //     color: "orange"
        // });

        // let trackObj = new Track({
        //     name: "hillclinb",
        //     //name: "test",
        //     // pos: [canvas.width/2-25, canvas.height/2],
        //     pos: [153, -3488],
        //     //finish line: 3878
        //     cars: [newCar]
        // });
        
        // game.addCar(newCar);
        // newCar.draw(context);
        
    }
    
    timer(lapOver){
        // let lastTime;
        document.addEventListener('keypress', (event) => {
            // console.log("--------------------------");
            let sec = 0;
            let tens = 0;
            let ten = 0
            let min = 0;
            const timerInt = setInterval(() => {
                if(this.isPaused === false){
                    let timer = document.getElementById("timer");
                    sec++;
                    console.log("are we paused? ", this.isPaused);
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
                    if (this.track.getPos()[1] >= 3857 && lapOver === false){
                        lapOver = true;
                        this.times.push(min+":"+tens+sec);
                        // console.log("the current value representing the time!!!!!!!:", lastTime);
                        this.updateBoard();
    
                        clearInterval(timerInt);
    
                        this.endOfLap(this.track, this.gameView);
                        // return null;
                    }
                }
            }, 1000);
        }, {once: true});
    }

    updateBoard(){
        let scoreBoard = document.getElementById("score-board");
        this.uniqueTimes();
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

    uniqueTimes(){
        let uniqueTimes = this.times.filter((t, index) => {
            return this.times.indexOf(t) === index;
        });
        this.times = uniqueTimes;
    }

    onPause(track, car){
            let pauseMenu = document.getElementById("pause-menu");
            // let muted = false;
            this.isPaused = true;
            pauseMenu.style.display = "block";
            let pausedVel = track.getVel();
            track.setFullVelocity([0,0]);
            let resume = document.getElementById("resume-button");
            let mute = document.getElementById("mute-button");
            let unmute = document.getElementById("unmute-button");
            resume.addEventListener('click', () => {
                this.isPaused = false;
                pauseMenu.style.display = "none";
                track.setFullVelocity(pausedVel);
            });
            mute.addEventListener('click', () => {
                car.mute();
            });
            // if(!muted){
            //     mute.addEventListener('click', () => {
            //         car.mute();
            //         mute.style.display = "none";
            //         unmute.style.display = "block";
            //         muted = true;
            //     });
            // }else{
            //     unmute.addEventListener('click', () => {
            //         car.unmute();
            //         mute.style.display = "block";
            //         unmute.style.display = "none";
            //         muted = false;
            //     });
            // }



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