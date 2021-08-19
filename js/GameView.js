export default class GameView {
    constructor() {
        
    }
    uppdateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for( let i = 0; i < game.board.length; i++){
            let tile = document.querySelector(`.board-tile[data-index = '${i}']`);
            // tile.textContent = game.board[i];
            let tileType = game.board[i]  == 'X' ? "type-x" : "type-o";
             tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
            tile.classList.remove("tile-winner");
            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }
    updateTurn(game){
        let playerX = document.querySelector(".playerX");
        let playerO = document.querySelector(".playerO");
        playerX.classList.remove('active');
        playerO.classList.remove('active')
        if(game.turn == 'X'){
            playerX.classList.add('active');            
        }else{
            playerO.classList.add('active');
        }

    }
}