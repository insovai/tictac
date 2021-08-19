import Game from "./Game.js"
import GameView from "./GameView.js"
let game = new Game();
let gameView = new GameView();

let tile = document.querySelectorAll(".board-tile");
tile.forEach((tile) =>{
    tile.addEventListener("click", () => {
        onTileclick(tile.dataset.index);
    }) 
})

function onTileclick(i){
    game.makeMove(i);
    gameView.uppdateBoard(game);
    
}
document.querySelector(".restart").addEventListener("click", ()=>{
    onRestart();
})
function onRestart(){
    game = new Game();
    gameView.uppdateBoard(game);
}
gameView.uppdateBoard(game);

            