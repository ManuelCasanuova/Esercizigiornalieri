
function createMainBoard(num){
    let mainBoard = document.querySelector('#main-board')
    for(let i=0; i<num; i++){
        let div = document.createElement('div')
        div.classList.add('cell');
        div.innerText= i+1;
        mainBoard.appendChild(div)
    }
}

function generateRandomNumber(num){
    let numRand= Math.round(Math.random()*num)
    if(mainBoardNum.length===num){
        alert("Estrazione Completa")
        return;
    }
    if(!mainBoardNum.includes(numRand) && numRand!==0){
    mainBoardNum.push(numRand);
    let cells= document.querySelectorAll('#main-board div.cell')
    cells[numRand-1].classList.add('estratto');
}else{
    generateRandomNumber(num)
}
}

const numeriTombola=76;
const mainBoardNum= [];

createMainBoard(numeriTombola)
//generateRandomNumber(numeriTombola)
let btnRand= document.querySelector("#rndBtn")
btnRand.addEventListener("click",()=>generateRandomNumber(numeriTombola))