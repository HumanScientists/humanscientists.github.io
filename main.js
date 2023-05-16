window.addEventListener('DOMContentLoaded', () => {
    // get div class="grid-container"
    const grid = document.querySelector('.grid-container');

    // get width of container (which is 100% of the screen)
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

    console.log(width, height);

    // if the screen is smaller than 1000px, use 20px as the divisor
    // otherwise, use 50px as the divisor

    divisor = Math.min(Math.floor(0.15*width), 80);

    console.log(Math.floor(0.15*width), divisor)

    const rows = Math.floor(height/divisor)+1;
    const cols = Math.floor(width/divisor)+1;

    console.log(rows, cols, rows*cols)

    console.log(rows, cols)

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

