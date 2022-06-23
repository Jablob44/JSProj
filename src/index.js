//entry js file
import Car from "./scripts/car";
import GameView from "./scripts/gameView";
import Game from "./scripts/game";
import Track from "./scripts/track";
import Util from "./scripts/util";
// import gamePlay from "./scripts/gameplay"
import GamePlay from "./scripts/gameplay";
window.addEventListener('DOMContentLoaded', (event) => {
    // alert('DOM is fully loaded')


    //Have a main menu class{
        // When play is pushed{
            //have a selection menu class{
                //when start is pushed{
                    //Have a gameplay class{
                        //Have a pause menu class
                    //}
                    //
                //}
            //}
        //}
    //}
    // console.log("new car")
    let gamePlay = new GamePlay();
    gamePlay.mainMenu();
    // gamePlay.updateBoard();
   

})
// console.log("working")