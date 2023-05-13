window.addEventListener('DOMContentLoaded', () => {
    // get div class="grid-container"
    const grid = document.querySelector('.grid-container');

    // get width of container (which is 100% of the screen)
    const width = grid.offsetWidth;
    const height = grid.offsetHeight;

    // set number of rows and columns. 50px is the size of each cell
    // but we want to fill out the entire screen and want the blocks to move later on
    // we only want integer values and add 10 to each to make sure we fill the entire screen
    const rows = Math.floor(height / 50) + 10;
    const cols = Math.floor(width / 50) + 10;

    // create a 2D array to store the grid
    let gridArray = new Array(rows);
    for (let i = 0; i < rows; i++) {
        gridArray[i] = new Array(cols);
    }

    // create the grid
    function createGrid() {
        // loop through each row
        for (let i = 0; i < rows; i++) {
            // loop through each column
            for (let j = 0; j < cols; j++) {
                // create a div element
                let cell = document.createElement('div');
                // add a class to the div
                cell.classList.add('grid-item');
                // add the div to the grid
                grid.appendChild(cell);
                // add the div to the array
                gridArray[i][j] = cell;
            }
        }
    }    
    // call the createGrid function
    createGrid();

    // every 100ms, pick a random cell and add a class "animate" to it
    // once the animation is done, remove the class
    // create a function to animate the cells
    function animateCells() {
        // get a random cell
        const cells = document.querySelectorAll('.grid-item');
        const randomCell = cells[Math.floor(Math.random() * cells.length)];
        // add the animate class to the random cell
        randomCell.classList.add('animate');
        // remove the animate class after 500ms
        setTimeout(() => {
            randomCell.classList.remove('animate');
        }, 500);
    }
    // call the animateCells function every 100ms
    setInterval(animateCells, 10);
});

