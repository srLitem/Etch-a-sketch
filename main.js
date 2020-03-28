// Obtaining the body from the document
bodyDoc = document.querySelector('body');
createButton = document.getElementById('creator');
let block_list = [];

// Board creation on click
createButton.addEventListener('click', (e) => {
    // Clean board before adding a new one
    if (document.getElementById('wrapper') != null) {
        let deleteElem = document.getElementById('wrapper');
        deleteElem.parentNode.removeChild(deleteElem);
    }
    let numCol = parseInt(prompt('Columns'));
    let numRow = parseInt(prompt('Rows'));
    createGrid(numCol, numRow);

    // Save the created blocks
    block_list = Array.from(document.getElementsByClassName('block'));

    // Change the color of the hovered blocks
    block_list.forEach((block) => {
        block.addEventListener('mouseover', (e) => {
            block.style.backgroundColor = '#2f19ab';
        })
    })
})



// Function created to generate the grid
function createGrid(x, y) {
    // Setting the CSS variables
    document.documentElement.style.setProperty('--numCol', x);
    document.documentElement.style.setProperty('--numRow', y);
    let board = document.createElement('div')
    board.setAttribute('id', 'wrapper')
    bodyDoc.appendChild(board);

    for (let i = 0; i < (x * y); i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('block');
        newDiv.setAttribute('id', (i + 1));
        board.appendChild(newDiv);
    }
}