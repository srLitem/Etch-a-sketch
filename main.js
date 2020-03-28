bodyDoc = document.querySelector('body');

function createGrid(x, y){
    let board = document.createElement('div')
    board.classList.add('wrapper');
    bodyDoc.appendChild(board);
    for(let i = 0; i < x; i++){
        newColDiv = document.createElement('div');
        newColDiv.classList.add('col');
        newColDiv.setAttribute('id',(i+1));
        board.appendChild(newColDiv);
        for(let j = 0; j < y; j++){
            newRowDiv = document.createElement('div');
            newRowDiv.classList.add('row', 'square');
            let idElement = `${i + 1}-${j + 1}`
            newRowDiv.setAttribute('id', idElement);
            newColDiv.appendChild(newRowDiv);
        }
    }

}

let numCol = parseInt(prompt('Columns'));
let numRow = parseInt(prompt('Rows'));
createGrid(numCol, numRow);