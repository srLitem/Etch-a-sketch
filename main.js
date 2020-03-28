// Obtaining the body from the document
bodyDoc = document.querySelector('body');

//TODO: Make input fields for this
let numCol = parseInt(prompt('Columns'));
let numRow = parseInt(prompt('Rows'));
createGrid(numCol, numRow);

// Save the created blocks
block_list = Array.from(document.getElementsByClassName('block'));

// Change the color of the hovered blocks
block_list.forEach((block) => {
    block.addEventListener('mouseover', (e) => {
        block.style.backgroundColor = "blue";
    })
})

// Function created to generate the grid
function createGrid(x, y){
    // Setting the CSS variables
    document.documentElement.style.setProperty('--numCol', x);
    document.documentElement.style.setProperty('--numRow', y);
    let board = document.createElement('div')
    board.classList.add('wrapper');
    bodyDoc.appendChild(board);

    for(let i = 0; i < (x*y); i++){
        newDiv = document.createElement('div');
        newDiv.classList.add('block');
        newDiv.setAttribute('id',(i+1));
        board.appendChild(newDiv);
    }
}