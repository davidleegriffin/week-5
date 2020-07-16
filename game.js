let playerToken = 'red';
document.getElementById('click-targets').setAttribute('class', `${playerToken}`);

export class Game {
    constructor(player1Name, player2Name){
        this.player1 = player1Name;
        this.player2 = player2Name;
    }

    getName() {
        return `${this.player1.toUpperCase()} <-VS-> ${this.player2.toUpperCase()}`;
    }

}


let turnCount = 0;

function checkColumnFull(columnNum) {
    let columnCount = 0;
    for(let i = 0; i < 6; i++){
        let square = document.getElementById(`square-${i}-${columnNum}`);
        console.log(`square-${i}-${columnNum}`);
        if(square.classList.contains('token')){
            // console.log(square);
            columnCount++;
        }
    }
    if(columnCount === 6){
        let column = document.getElementById(`column-${columnNum}`);
        column.classList.add('full');
    }
    
}

function checkColumn(columnNum){
    for(let i = 5; i >= 0; i--){
        let square = document.getElementById(`square-${i}-${columnNum}`);
        if(!square.classList.contains('token')){
            square.classList.add('token', playerToken);
            turnCount += 1;
           // console.log(turnCount);
            checkColumnFull(columnNum);
            playerToken = playerToken === 'red' ? 'black' : 'red';
            document.getElementById('click-targets').setAttribute('class', `${playerToken}`)
            break;
        }
    }
}

document.querySelectorAll('.click-target').forEach(target => {
    target.addEventListener('click', e => {
        console.log(e.target.id[7])
        checkColumn(e.target.id[7]) //0
    });
});
