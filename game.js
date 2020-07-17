
export class Game {
    constructor(player1Name, player2Name){
        this.player1 = player1Name;
        this.player2 = player2Name;
        this.playerToken = 'red';
        document.getElementById('click-targets').setAttribute('class', `${this.playerToken}`);
        this.addListener();
    }

    addListener() {
        document.querySelectorAll('.click-target').forEach(target => {
            target.addEventListener('click', e => {
                this.checkColumn(e.target.id[7]) //0
            })
        });
    }

    getName() {
        return `${this.player1.toUpperCase()} <-VS-> ${this.player2.toUpperCase()}`;
    }

    checkColumnFull(columnNum) {
        let columnCount = 0;
        for(let i = 0; i < 6; i++){
            let square = document.getElementById(`square-${i}-${columnNum}`);
            if(square.classList.contains('token')){
                // console.log(square);
                columnCount++;
            }
        }
        if(columnCount === 6){
            let column = document.getElementById(`column-${columnNum}`);
            column.classList.add('full');
            this.checkIsTie();
        }
        
    }

    checkIsTie() {
        let tieCounter = 0;
        for (let i=0; i<7; i++) {
            let column = document.getElementById(`column-${i}`);
            if (column.classList.contains('full')) {
                tieCounter += 1;
            }
        }
        if (tieCounter===7) {
            document.getElementById('game-name').innerHTML = "<h1>ends in a tie!</h1>";
        }
    }
    
    checkColumn(columnNum){
        for(let i = 5; i >= 0; i--){
            let square = document.getElementById(`square-${i}-${columnNum}`);
            if(!square.classList.contains('token')){
                square.classList.add('token', this.playerToken);
                this.checkColumnFull(columnNum);
                this.checkForWin(Number(i), Number(columnNum));       
                this.playerToken = this.playerToken === 'red' ? 'black' : 'red';
                document.getElementById('click-targets').setAttribute('class', `${this.playerToken}`)
                break;
            }
        }
    }

    checkForWin(row, column){
        let [ up, down, left, right, ne, nw, sw, se ] = [0,0,0,0,0,0,0,0];

        //row check
            //check right
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((column+i >= 0 && column+i <= 6) && (document.getElementById(`square-${row}-${column+i}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column+i}`)
                right += 1;
            }
        }

            //check left
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((column-i >= 0 && column-i <= 6) && (document.getElementById(`square-${row}-${column-i}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                left += 1;
            }
        }


        if(right+left >= 3){
            console.log(`${this.playerToken} is the Winner!`)
        }


        //column check
            //check up
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((row-i >= 0 && row-i <= 5) && (document.getElementById(`square-${row-i}-${column}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                up += 1;
            }
        }

            //check down
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((row+i >= 0 && row+i <= 5) && (document.getElementById(`square-${row+i}-${column}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                down += 1;
            }
        }

        if(up+down >= 3){
            console.log(`${this.playerToken} is the Winner!`)
        }

        //diagonal check
            //check NorthEast
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((row-i >= 0 && row-i <= 5) && (column+i >= 0 && column+i <= 6) && (document.getElementById(`square-${row-i}-${column+i}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                ne += 1;
            }
        }
            //check SouthWest
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((row+i >= 0 && row+i <= 5) && (column-i >= 0 && column-i <= 6) && (document.getElementById(`square-${row+i}-${column-i}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                sw += 1;
            }
        }

        if(ne+sw >= 3){
            console.log(`${this.playerToken} is the Winner!`)
        }

            //check NW
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((row-i >= 0 && row-i <= 5) && (column-i >= 0 && column-i <= 6) && (document.getElementById(`square-${row-i}-${column-i}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                nw += 1;
            }
        }
            //check SE
        for(let i = 1; i < 4; i++){
            // console.log(`Row: ${row} Column: ${column+1}`)
            if((row+i >= 0 && row+i <= 5) && (column+i >= 0 && column+i <= 6) && (document.getElementById(`square-${row+i}-${column+i}`).classList.contains(`${this.playerToken}`))){
                console.log(`Aye ${row} ${column-i}`)
                se += 1;
            }
        }
        if(nw+se >= 3){
            console.log(`${this.playerToken} is the Winner!`)
        }
    }
}

