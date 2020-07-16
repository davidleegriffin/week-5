import { Game } from './game.js';
let game = undefined;
updateUI();

function updateUI(){
    let board = document.getElementById('board-holder');
    if(game === undefined){
        board.classList.add('is-invisible');
    } else {
        board.classList.remove('is-invisible');
        document.getElementById('game-name').innerHTML = `<h1>${game.getName()}</h1>`;
    }
}

window.addEventListener('DOMContentLoaded', e => {
    
    document.getElementById('form-holder').addEventListener('keyup', e => {
        let player1 = document.getElementById('player-1-name');
        let player2 = document.getElementById('player-2-name');
        if(player1.value && player2.value){
            document.getElementById('new-game').removeAttribute('disabled');
        }
    });

    document.getElementById('new-game').addEventListener('click', e => {
        let player1 = document.getElementById('player-1-name');
        let player2 = document.getElementById('player-2-name');
        game = new Game(player1.value, player2.value);
        document.getElementById('new-game').setAttribute('disabled', 'true');
        updateUI();
    })
})


